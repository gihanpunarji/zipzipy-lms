"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter, usePathname } from "next/navigation";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  // Fetch user profile and role from database
  const fetchUserProfile = async (userId) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('uid', userId)
        .single();

      if (error) {
        console.error('Error fetching user profile:', error);
        return null;
      }

      setUserProfile(data);
      setUserRole(data?.role?.toLowerCase());
      return data;
    } catch (err) {
      console.error('Unexpected error fetching profile:', err);
      return null;
    }
  };

  useEffect(() => {
    // Get initial session
    const initializeAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        setSession(session);
        setUser(session?.user ?? null);

        if (session?.user) {
          await fetchUserProfile(session.user.id);
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state changed:', event, session?.user?.email);

        setSession(session);
        setUser(session?.user ?? null);

        if (session?.user) {
          await fetchUserProfile(session.user.id);
        } else {
          setUserProfile(null);
          setUserRole(null);
        }

        setLoading(false);

        // Handle different auth events
        if (event === 'SIGNED_OUT') {
          setUserProfile(null);
          setUserRole(null);
          // Only redirect if not already on auth/public page
          if (!pathname.startsWith('/auth') && pathname !== '/') {
            router.push('/auth/login');
          }
        }

        if (event === 'SIGNED_IN') {
          // Don't auto-redirect on sign in - let the login/register page handle it
          // This prevents conflicts with manual navigation
          console.log('User signed in, profile will be fetched on next render');
        }
      }
    );

    return () => {
      subscription?.unsubscribe();
    };
  }, [router, pathname]);

  const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { data, error };
  };

  const signUp = async (email, password, metadata = {}) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: metadata,
      },
    });
    return { data, error };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    router.push("/auth/login");
  };

  const value = {
    user,
    session,
    userRole,
    userProfile,
    loading,
    signIn,
    signUp,
    signOut,
    refreshProfile: () => user ? fetchUserProfile(user.id) : null,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

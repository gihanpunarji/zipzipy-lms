'use server'

import { createClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";
import bcrypt from 'bcrypt';

export async function registerTeacher(prevState, formData) {
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const selectedPlan = formData.get('selectedPlan');

    if (!email || !password || !firstName || !lastName) {
        return { error: 'All fields are required' };
    }

    if (password !== confirmPassword) {
        return { error: 'Passwords do not match' };
    }

    const supabase = await createClient();

    // 1. Sign up the user
    const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                firstName,
                lastName,
                role: 'teacher'
            }
        }
    });

    if (authError) {
        if (authError.message.includes('already registered')) {
            return { error: "This email is already registered. Please login instead." };
        }
        return { error: authError.message };
    }

    if (authData?.user) {
        if (authData.user.identities && authData.user.identities.length === 0) {
            return { error: "This email is already registered. Please login instead." };
        }

        // 2. Insert into users table
        const hashedPassword = await bcrypt.hash(password, 10);
        const { data: userData, error: userError } = await supabase.from('users').insert({
            uid: authData.user.id,
            email: authData.user.email,
            password: hashedPassword,
            first_name: firstName.trim(),
            last_name: lastName.trim(),
            role: 'teacher',
            status: 'active',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        }).select();

        if (userError) {
            console.error("Database insertion error:", userError);
            return { error: "Failed to create user profile. Please contact support." };
        }

        if (userData && userData.length > 0) {
            // 3. Insert teacher plan
            const { error: planError } = await supabase.from('teacher_plan').insert({
                id: userData[0].id,
                selected_plan: selectedPlan,
                created_at: new Date().toISOString()
            });

            if (planError) {
                console.error("Plan insertion error:", planError);
                return { error: "Failed to set up your plan. Please contact support." };
            }
        }
    }

    redirect('/auth/login/teacher');
}

export async function loginUser(prevState, formData) {
    const email = formData.get('email');
    const password = formData.get('password');
    const expectedRole = formData.get('expectedRole'); // 'student' or 'teacher'

    if (!email || !password) {
        return { error: 'Email and password are required' };
    }

    const supabase = await createClient();

    // 1. Sign in
    const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (signInError) {
        if (signInError.message.includes('Invalid login credentials')) {
            return { error: "Invalid email or password. Please try again." };
        }
        return { error: signInError.message };
    }

    if (data?.user) {
        // 2. Fetch profile
        const { data: userProfile, error: profileError } = await supabase
            .from('users')
            .select('role, status')
            .eq('uid', data.user.id)
            .single();

        if (profileError) {
            console.error("Profile fetch error:", profileError);
            return { error: "Unable to load user profile. Please contact support." };
        }

        console.log("User profile fetched:", userProfile);
        console.log("Expected role:", expectedRole);

        // 3. Role Check
        const userRole = userProfile.role?.toLowerCase();
        console.log("Actual user role from DB:", userRole);

        if (userRole !== expectedRole.toLowerCase()) {
            return {
                error: `This login is for ${expectedRole}s only. Please use the correct login page.`
            };
        }

        // 4. Status check
        if (userProfile.status !== 'active') {
            return { error: "Your account is inactive. Please contact support." };
        }

        // Redirect based on role
        console.log("Redirecting user with role:", userRole);
        if (userRole === 'teacher') {
            redirect('/dashboard/teacher');
        } else {
            redirect('/dashboard/student');
        }
    }
}

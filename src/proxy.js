import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';

export async function proxy(req) {
  let res = NextResponse.next({
    request: {
      headers: req.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name) {
          return req.cookies.get(name)?.value;
        },
        set(name, value, options) {
          req.cookies.set({
            name,
            value,
            ...options,
          });
          res = NextResponse.next({
            request: {
              headers: req.headers,
            },
          });
          res.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name, options) {
          req.cookies.set({
            name,
            value: '',
            ...options,
          });
          res = NextResponse.next({
            request: {
              headers: req.headers,
            },
          });
          res.cookies.set({
            name,
            value: '',
            ...options,
          });
        },
      },
    }
  );

  // Refresh session if expired
  let session = null;
  try {
    const {
      data: { session: sessionData },
    } = await supabase.auth.getSession();
    session = sessionData;
  } catch (error) {
    console.error('Failed to get session (Supabase may be paused):', error.message);
    // Continue without session - user will be treated as not logged in
  }

  const { pathname } = req.nextUrl;

  // Define public routes (accessible without login)
  const publicRoutes = [
    '/',
    '/auth/login',
    '/auth/login/student',
    '/auth/login/teacher',
    '/auth/register',
    '/auth/register/teacher',
    '/auth/forgot-password',
    '/pricing',
    '/about',
    '/contact',
    '/courses',
  ];


  // Protected routes that require authentication
  const isDashboardRoute = pathname.startsWith('/dashboard');
  const isAdminRoute = pathname.startsWith('/admin');

  // If user is not logged in and trying to access protected route
  if (!session && (isDashboardRoute || isAdminRoute)) {
    const redirectUrl = new URL('/auth/login', req.url);
    redirectUrl.searchParams.set('redirectTo', pathname);
    return NextResponse.redirect(redirectUrl);
  }

  // If user is logged in and trying to access auth pages, redirect to dashboard
  if (session && pathname.startsWith('/auth/')) {
    try {
      // Fetch user role from database
      const { data: userData } = await supabase
        .from('users')
        .select('role')
        .eq('uid', session.user.id)
        .single();

      if (userData) {
        if (userData.role === 'Teacher' || userData.role === 'teacher') {
          return NextResponse.redirect(new URL('/dashboard/teacher', req.url));
        } else if (userData.role === 'Student' || userData.role === 'student') {
          return NextResponse.redirect(new URL('/dashboard/student', req.url));
        }
      }
    } catch (error) {
      console.error('Failed to fetch user role:', error.message);
    }

    return NextResponse.redirect(new URL('/dashboard/student', req.url));
  }

  // Role-based route protection
  if (session && isDashboardRoute) {
    try {
      // Fetch user role
      const { data: userData } = await supabase
        .from('users')
        .select('role')
        .eq('uid', session.user.id)
        .single();

      if (userData) {
        const userRole = userData.role.toLowerCase();

        // Protect teacher routes
        if (pathname.startsWith('/dashboard/teacher') && userRole !== 'teacher') {
          return NextResponse.redirect(new URL('/dashboard/teacher', req.url));
        }

        // Protect admin routes
        if (isAdminRoute && userRole !== 'admin') {
          return NextResponse.redirect(new URL('/dashboard/admin', req.url));
        }
      }
    } catch (error) {
      console.error('Failed to fetch user role for route protection:', error.message);
    }
  }

  return res;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};

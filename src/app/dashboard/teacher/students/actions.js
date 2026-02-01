'use server'

import { createClient } from "@/lib/supabase-server";
import bcrypt from 'bcrypt';

export async function addStudent(prevState, formData) {
    const email = formData.get('email');
    const password = formData.get('password');
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const phone = formData.get('phone');

    if (!email || !password || !firstName || !lastName) {
        return { error: 'First name, last name, email and password are required' };
    }

    const supabase = await createClient();

    // Use admin API to create user without logging them in
    // This prevents the teacher from being logged out
    const { data: { user: newUser }, error: authError } = await supabase.auth.admin.createUser({
        email,
        password,
        email_confirm: true, // Auto-confirm the email
        user_metadata: {
            firstName,
            lastName,
            role: 'student'
        }
    });

    if (authError) {
        if (authError.message.includes('already registered') || authError.message.includes('User already registered')) {
            return { error: "This email is already registered." };
        }
        return { error: authError.message };
    }

    if (newUser) {
        // Insert into users table
        const hashedPassword = await bcrypt.hash(password, 10);
        const { data: userData, error: userError } = await supabase.from('users').insert({
            uid: newUser.id,
            email: newUser.email,
            password: hashedPassword,
            first_name: firstName.trim(),
            last_name: lastName.trim(),
            phone: phone || null,
            role: 'student',
            status: 'active',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        }).select();

        if (userError) {
            console.error("Database insertion error:", userError);
            return { error: "Failed to create student profile. Please contact support." };
        }

        return { success: true, message: "Student added successfully!" };
    }

    return { error: "Failed to create student account." };
}

export async function getStudents(page = 1, searchQuery = '') {
    const supabase = await createClient();
    const limit = 20;
    const offset = (page - 1) * limit;

    let query = supabase
        .from('users')
        .select('id, uid, email, first_name, last_name, phone, created_at', { count: 'exact' })
        .eq('role', 'student')
        .order('created_at', { ascending: false });

    // Add search filter if query exists
    if (searchQuery) {
        query = query.or(`first_name.ilike.%${searchQuery}%,last_name.ilike.%${searchQuery}%,email.ilike.%${searchQuery}%`);
    }

    const { data, error, count } = await query
        .range(offset, offset + limit - 1);

    if (error) {
        console.error("Error fetching students:", error);
        return { students: [], total: 0, error: error.message };
    }

    return {
        students: data || [],
        total: count || 0,
        totalPages: Math.ceil((count || 0) / limit)
    };
}

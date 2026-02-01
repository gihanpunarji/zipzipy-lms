'use client';

import { useAuth } from "@/app/components/auth-provider";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";

export default function DiagnosticPage() {
    const { user, userProfile, userRole, loading } = useAuth();

    if (loading) {
        return <div className="p-8">Loading...</div>;
    }

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">User Diagnostic Information</h1>

            <Card className="mb-4">
                <CardHeader>
                    <CardTitle>Auth User Object</CardTitle>
                </CardHeader>
                <CardContent>
                    <pre className="bg-muted p-4 rounded overflow-auto">
                        {JSON.stringify(user, null, 2)}
                    </pre>
                </CardContent>
            </Card>

            <Card className="mb-4">
                <CardHeader>
                    <CardTitle>User Profile from Database</CardTitle>
                </CardHeader>
                <CardContent>
                    <pre className="bg-muted p-4 rounded overflow-auto">
                        {JSON.stringify(userProfile, null, 2)}
                    </pre>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Detected Role</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg">
                        <strong>Role:</strong> {userRole || 'Not detected'}
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}

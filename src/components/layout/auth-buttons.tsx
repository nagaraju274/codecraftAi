// This directive marks this component as a Client Component.
"use client";

// Import React hooks for managing state and side effects.
import { useState, useEffect } from 'react';
// Import the Next.js Link component.
import Link from 'next/link';
// Import Firebase authentication functions and types.
import { onAuthStateChanged, User, signOut } from 'firebase/auth';
// Import the initialized Firebase auth instance.
import { auth } from '@/lib/firebase';
// Import the Button component.
import { Button } from '@/components/ui/button';
// Import an icon from the lucide-react library.
import { LayoutDashboard } from 'lucide-react';

// The AuthButtons component displays different buttons based on the user's authentication state.
export function AuthButtons() {
    // State to hold the current user object.
    const [user, setUser] = useState<User | null>(null);
    // State to manage the loading status while checking auth state.
    const [loading, setLoading] = useState(true);

    // Effect to subscribe to authentication state changes.
    useEffect(() => {
        // onAuthStateChanged listens for changes and returns an unsubscribe function.
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            // Update the user state.
            setUser(user);
            // Set loading to false once the auth state is determined.
            setLoading(false);
        });
        // Cleanup function to unsubscribe when the component unmounts.
        return () => unsubscribe();
    }, []); // Empty dependency array ensures this effect runs only once.

    // Function to handle user logout.
    const handleLogout = async () => {
        // Sign the user out using Firebase auth.
        await signOut(auth);
        // Redirect the user to the homepage.
        window.location.href = '/';
    };

    // If the authentication state is still being determined, show a loading skeleton.
    if (loading) {
        return (
            <div className="flex items-center gap-2">
                <div className="h-9 w-20 bg-muted rounded-md animate-pulse" />
                <div className="h-9 w-24 bg-muted rounded-md animate-pulse" />
            </div>
        );
    }

    // If a user is logged in, show the Dashboard and Logout buttons.
    if (user) {
        return (
            <div className="flex items-center gap-2">
                <Button asChild variant="outline">
                    <Link href="/profile">
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        Dashboard
                    </Link>
                </Button>
                <Button onClick={handleLogout}>
                    Logout
                </Button>
            </div>
        );
    }

    // If no user is logged in, show the Login and Sign Up buttons.
    return (
        <>
            <Button asChild variant="outline">
                <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
                <Link href="/signup">Sign Up</Link>
            </Button>
        </>
    );
}

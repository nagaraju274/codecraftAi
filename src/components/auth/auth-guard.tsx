// This directive marks this component as a Client Component.
"use client";

// Import React hooks for managing state and side effects.
import { useEffect, useState } from 'react';
// Import Firebase authentication types and functions.
import { onAuthStateChanged, User } from 'firebase/auth';
// Import the initialized Firebase auth instance.
import { auth } from '@/lib/firebase';
// Import the Next.js router for navigation.
import { useRouter } from 'next/navigation';
// Import the Loader icon.
import { Loader } from 'lucide-react';

// The AuthGuard component protects routes from unauthenticated access.
export function AuthGuard({ children }: { children: React.ReactNode }) {
    // State to hold the current user object.
    const [user, setUser] = useState<User | null>(null);
    // State to manage the loading status.
    const [loading, setLoading] = useState(true);
    // Get the router instance.
    const router = useRouter();

    // Effect to subscribe to authentication state changes.
    useEffect(() => {
        // The onAuthStateChanged function returns an unsubscribe function.
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            // Update the user state with the current user.
            setUser(user);
            // Set loading to false once the auth state is determined.
            setLoading(false);
        });
        // Cleanup function to unsubscribe when the component unmounts.
        return () => unsubscribe();
    }, []); // The empty dependency array ensures this effect runs only once on mount.

    // Effect to handle redirection based on auth state.
    useEffect(() => {
        // If not loading and no user is logged in, redirect to the login page.
        if (!loading && !user) {
            router.push('/login');
        }
    }, [user, loading, router]); // This effect runs when user, loading, or router changes.

    // If the authentication state is still being determined, show a loader.
    if (loading) {
        return (
            <div className="flex items-center justify-center h-full">
                <Loader className="h-8 w-8 animate-spin" />
            </div>
        );
    }

    // If a user is logged in, render the child components.
    if (user) {
        return <>{children}</>;
    }

    // If no user is logged in and not loading, return null (redirection is handled in useEffect).
    return null;
}

"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { onAuthStateChanged, User, signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { LayoutDashboard } from 'lucide-react';

export function AuthButtons() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        await signOut(auth);
        window.location.href = '/';
    };

    if (loading) {
        return (
            <div className="flex items-center gap-2">
                <div className="h-9 w-20 bg-muted rounded-md animate-pulse" />
                <div className="h-9 w-24 bg-muted rounded-md animate-pulse" />
            </div>
        );
    }

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

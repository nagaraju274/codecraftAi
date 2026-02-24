"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * This page is deprecated and has been replaced by /learn/bash.
 * Redirecting to the new location to maintain consistency.
 */
export default function RedirectToBash() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/learn/bash');
  }, [router]);

  return null;
}

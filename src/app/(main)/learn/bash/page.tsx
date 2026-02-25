
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * This page is redirected to the dynamic roadmap engine to reduce file bloat.
 * Data now lives in src/lib/learning-paths-data.ts
 */
export default function RedirectToDynamicBash() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/learn/bash');
  }, [router]);

  return null;
}

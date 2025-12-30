// This directive marks this component as a Client Component.
"use client";

// The AuthGuard component is now disabled. It will render its children directly without checking for authentication.
export function AuthGuard({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

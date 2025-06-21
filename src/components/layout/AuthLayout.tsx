import React from 'react';
import { cn } from '@/lib/utils';

interface AuthLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * A layout component for authentication pages.
 * It centers its children both vertically and horizontally within the viewport.
 */
const AuthLayout: React.FC<AuthLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'flex min-h-screen items-center justify-center bg-background p-4',
        className
      )}
    >
      {children}
    </main>
  );
};

export default AuthLayout;

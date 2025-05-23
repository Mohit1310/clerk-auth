import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';
import React from 'react';

const Navigation = async () => {
  const { sessionClaims } = await auth();
  const isAdmin = sessionClaims?.metadata?.role === 'admin';
  return (
    <nav className="bg-[var(--background)] border-b border-[var(--foreground)]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="text-xl font-semibold text-[var(--foreground)]">
                Next.js App
              </h1>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <SignedOut>
              <SignInButton mode="modal" />
            </SignedOut>
            <SignedIn>
              {isAdmin && <Link href={'/admin'}>Admin</Link>}
              <Link href={'/dashboard'}>Dashboard</Link>
              <Link href={'/user-profile'}>Profile</Link>
              <SignOutButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

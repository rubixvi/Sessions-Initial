import Layout from '@/components/layout';
import { signIn, signOut, useSession } from "next-auth/react";
import React, { useState } from 'react';

import {
  BellIcon,
  ChatBubbleLeftIcon,
  HomeIcon,
  UserGroupIcon,
  Squares2X2Icon,
  BuildingStorefrontIcon,
  MagnifyingGlassIcon,
  PuzzlePieceIcon,
  TvIcon,
} from '@heroicons/react/24/solid';
import HeaderIcon from '@/components/headericon';
import { useRouter } from 'next/router'; // Import the useRouter hook

export default function Page () {
  const { data: session, status } = useSession();
  const router = useRouter(); // Initialize the router instance
  
  const handleRegister = () => {
    router.push('/register'); // Navigate to the registration page
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-8">Login</h1>
        {!session ? (
          <div className="space-y-4 space-x-3">
            <button
              className="bg-gray-900 text-white px-4 py-2 rounded-md"
              onClick={() => signIn('github')}
            >
              Login with GitHub
            </button>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
              onClick={() => signIn('facebook')}
            >
              Login with Facebook
            </button>
          </div>
        ) : (
          <p>You are logged in as {session.user.email}</p>
        )}
        {/* Move the registration button inside the conditional rendering */}
        {!session && (
          <div className="p-5 space-y-4 space-x-3">
            <a
              className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer"
              onClick={handleRegister}
            >
              Register here
            </a>
          </div>
        )}
      </div>
    </Layout>
  )
}

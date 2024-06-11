import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from 'next/image';
import ProfilePicture from "./profile-picture"
import ProfileMenu from "./profile-menu"
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
import HeaderIcon from './headericon';


// The approach used in this component shows how to built a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  const { data: session, status } = useSession()
  const loading = status === 'loading'
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
            <div className="flex items-center">
                <Link href="/">
                    <Image 
                        src="/logo.svg"
                        height={60}
                        width={60}
                        layout="fixed"
                        className="cursor-pointer"
                    />
                </Link>
                {session?.user && (
                <>
                    <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                        <MagnifyingGlassIcon className="h-5 text-gray-600" />
                        <input 
                            className="flex ml-4 items-center bg-transparent outline-none placeholder-gray-500" 
                            type="text" 
                            placeholder="Search Sessions" 
                        />
                    </div>
                </>
                )}
            </div>

            <div className="flex justify-center flex-grow">
                <div className="flex space-x-2 md:space-x-6">
                {session?.user && (
                    <>
                        <Link href="/">
                            <HeaderIcon active={true} Icon={HomeIcon} />
                        </Link>
                        <HeaderIcon Icon={TvIcon} />
                        <HeaderIcon Icon={BuildingStorefrontIcon} />
                        <HeaderIcon Icon={UserGroupIcon} />
                        <HeaderIcon Icon={PuzzlePieceIcon} />
                    </>
                )}
                </div>
            </div>

            <div className="flex items-center sm:space-x-2 justify-end">
            {session?.user && (
                <>
                    <Squares2X2Icon className="icon" />
                    <ChatBubbleLeftIcon className="icon" />
                    <BellIcon className="icon" />
                    <div onClick={toggleMenu}>
                      <ProfilePicture />
                    </div>
                    {isMenuOpen && <ProfileMenu />}
                </>
            )}
            {!session && (
            <>
                <div>
                    <Link className="font-bold" href="/">Login</Link>
                </div>
            </>
            )}
            </div>
        </div>
    </header>
  )
}

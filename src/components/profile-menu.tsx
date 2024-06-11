import React from 'react';
import { signIn, signOut, useSession } from "next-auth/react";
import {
    LockClosedIcon,
    Cog6ToothIcon,
} from '@heroicons/react/24/solid';

const ProfileMenu: React.FC = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>Please sign in</div>;
  }

  return (
    <div className="absolute top-16 right-0 bg-white shadow-lg rounded-md p-2 w-80">
        <ul className="space-y-2">
            <li className="border-b-2 shadow-md">
                <a 
                href="/me" 
                className="top-0 space-x-4 bg-white flex place-items-center p-4">
                    <img
                        src={session.user.image}
                        alt={session.user.name}
                        className="rounded-full w-10 h-10 cursor-pointer"
                    />
                    <span className="font-medium">
                        {session.user.name}
                    </span>
                </a>
            </li>
            <li>
              <a 
            href="/settings"
            className="menu"
            >
              <Cog6ToothIcon className="menu-icon" />
              <span className="font-medium">
                Settings
              </span>
              </a>
            </li>
              <li>
                <a
                  href={`/api/auth/signout`}
                  onClick={(e) => {
                    e.preventDefault()
                    signOut()
                  }}
                  className="menu"
                >
                  <LockClosedIcon className="menu-icon" />
                  <span className="font-medium">
                    Log Out
                  </span>
                </a>
              </li>
          </ul>
    </div>
  );
};

export default ProfileMenu;
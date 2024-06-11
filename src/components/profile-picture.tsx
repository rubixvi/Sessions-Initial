import React from 'react';
import { useSession } from 'next-auth/react';
import {
    ChevronDownIcon
} from '@heroicons/react/24/solid';

const ProfilePicture: React.FC = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>Please sign in</div>;
  }

  return (
    <div className="relative w-10 h-10">
      {session.user?.image && (
        <>
          <img
            src={session.user.image}
            alt={session.user.name || 'Profile Picture'}
            className="rounded-full w-full h-full cursor-pointer"
          />
          <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-white flex items-center justify-center">
            <ChevronDownIcon className="w-2 h-2 text-gray-800 cursor-pointer shadow-md" />
          </div>
        </>
      )}
    </div>
  );
};

export default ProfilePicture;
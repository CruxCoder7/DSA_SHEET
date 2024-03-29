'use client';
import { Ubuntu } from 'next/font/google';
import Image from 'next/image';
import { useState } from 'react';

const ubuntu = Ubuntu({ weight: '500', subsets: ['latin'] });

export default function ProfilePicture({
  profile_picture,
}: {
  profile_picture: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <Image
        src={profile_picture}
        alt="profile_picture"
        width={50}
        height={50}
        className="rounded-full relative hover:opacity-70"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div
          className="absolute lg:top-28 top-32 lg:md:right-[20.2rem] right-[1.7rem] bg-white p-2 flex rounded-md hover:cursor-pointer
         hover:bg-slate-100"
        >
          <p
            className={`text-red-700 ${ubuntu.className}`}
            onClick={() =>
              (window.location.href = 'http://localhost:3000/api/auth/logout')
            }
          >
            Logout
          </p>
        </div>
      )}
    </div>
  );
}

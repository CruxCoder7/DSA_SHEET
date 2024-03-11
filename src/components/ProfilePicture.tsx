'use client';

import { Ubuntu } from 'next/font/google';
import Image from 'next/image';
import { redirect } from 'next/navigation';
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
          className="absolute top-28 right-[20.2rem] bg-white p-2 flex rounded-md hover:cursor-pointer
         hover:bg-slate-100"
        >
          <p
            className={`text-red-700 ${ubuntu.className}`}
            onClick={() =>
              (window.location.href =
                'https://7fb2-2406-7400-c6-31c8-85d-c484-f512-8c92.ngrok-free.app/api/auth/logout')
            }
          >
            Logout
          </p>
        </div>
      )}
    </div>
  );
}

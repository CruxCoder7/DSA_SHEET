'use client';
import { Ubuntu } from 'next/font/google';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const ubuntu = Ubuntu({ weight: '500', subsets: ['latin'] });

export default function ProfilePicture({
  profile_picture,
}: {
  profile_picture: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <div className="relative">
      <Image
        src={profile_picture}
        alt="profile_picture"
        width={50}
        height={50}
        className={`rounded-full  hover:opacity-70 ${isOpen && 'opacity-70'}`}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div
          className="absolute top-16 -right-3 bg-white p-2 flex rounded-md hover:cursor-pointer
         hover:bg-slate-100"
        >
          <p
            className={`text-red-700 ${ubuntu.className}`}
            onClick={() => router.push('/api/auth/logout')}
          >
            Logout
          </p>
        </div>
      )}
    </div>
  );
}

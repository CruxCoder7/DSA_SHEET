'use client';
import { Ubuntu } from 'next/font/google';
import Link from 'next/link';

const ubuntu = Ubuntu({ weight: '500', subsets: ['latin'] });

export default function HeroButton({
  path,
  value,
}: {
  path: string;
  value: string;
}) {
  return (
    <Link href={path}>
      <button
        className={`rounded-lg text-white shadow-xl px-10 py-4 ${ubuntu.className}
          before:ease relative overflow-hidden border border-red-500 bg-red-500 text-white 
          shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 
          before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 
          hover:shadow-red-400 hover:before:-translate-x-40
          `}
      >
        {value}
      </button>
    </Link>
  );
}

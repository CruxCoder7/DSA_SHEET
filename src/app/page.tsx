import HeroButton from '@/components/HeroButton';
import Roadmap from '@/components/Roadmap';
import SmoothScrollButton from '@/components/SmoothScrollButton';
import { getSession } from '@auth0/nextjs-auth0';
import { Ubuntu } from 'next/font/google';
import Image from 'next/image';

const ubuntu = Ubuntu({ weight: '500', subsets: ['latin'] });

export default async function Home() {
  const session = await getSession();

  return (
    <main className="flex flex-col">
      <div className="min-h-screen flex flex-col justify-evenly">
        <div className="flex justify-between items-center w-full lg:md:p-7 p-4">
          <Image src={'/cc_logo.webp'} alt="cc_logo" width={100} height={100} />
          <Image src={'/SNU.avif'} alt="cc_logo" width={175} height={175} />
        </div>
        <div className="flex items-center justify-center flex-col gap-10 lg:md:mt-16 mt-10">
          <h1
            className={`lg:md:text-7xl text-5xl text-center text-slate-200 ${ubuntu.className}`}
          >
            Dive into our DSA Problem Sheet
          </h1>
          <p
            className={`text-slate-200 text-center lg:md:text-xl px-4 text-xl ${ubuntu.className}`}
          >
            Curated with ❤️ by the Competitive Programming Team at{' '}
            <span className="text-[#bf950c]">SNUC Coding Club</span>
          </p>
          <HeroButton
            path={session?.user ? '/sheet' : '/api/auth/login'}
            value={session?.user ? 'Go to Sheet' : 'Get Started'}
          />
          <div className="flex flex-col items-center gap-6 justify-center lg:md:mt-20">
            <p className={`text-slate-200 text-sm ${ubuntu.className}`}>
              Check out our Roadmap
            </p>
            <SmoothScrollButton />
          </div>
        </div>
      </div>
      <Roadmap />
    </main>
  );
}

import HeroButton from '@/components/HeroButton';
import Roadmap from '@/components/Roadmap';
import SmoothScrollButton from '@/components/SmoothScrollButton';
import { getSession } from '@auth0/nextjs-auth0';
import { Ubuntu } from 'next/font/google';
import Image from 'next/image';

const ubuntu = Ubuntu({ weight: '500', subsets: ['latin'] });

export default async function Home() {
  const session = await getSession();
  // if (session?.user) return redirect('/sheet');

  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex justify-between w-full p-7">
        <Image src={'/cc_logo.webp'} alt="cc_logo" width={100} height={100} />
        <Image src={'/SNU.avif'} alt="cc_logo" width={175} height={175} />
      </div>
      <div className="flex items-center justify-center flex-col gap-10 mt-16">
        <h1 className={`text-7xl text-slate-200 ${ubuntu.className}`}>
          Dive into our DSA Problem Sheet
        </h1>
        <p className={`text-slate-200 text-xl ${ubuntu.className}`}>
          Curated with ❤️ by the Competitive Programming Team at{' '}
          <span className="text-[#bf950c]">SNUC Coding Club</span>
        </p>
        <HeroButton
          path={session?.user ? '/sheet' : '/api/auth/login'}
          value={session?.user ? 'Go to Sheet' : 'Get Started'}
        />
        <div className="flex flex-col items-center gap-6 justify-center mt-20">
          <p className={`text-slate-200 text-sm ${ubuntu.className}`}>
            Check out our Roadmap
          </p>
          <SmoothScrollButton />
        </div>
      </div>
      <Roadmap />
    </main>
  );
}

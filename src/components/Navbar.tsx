import { Session } from '@auth0/nextjs-auth0';
import { Ubuntu } from 'next/font/google';
import ProfilePicture from './ProfilePicture';

type NavbarProps = {
  session: Session;
  total_problems: number;
};

const ubuntu = Ubuntu({ weight: '500', subsets: ['latin'] });

export default function Navbar({ session, total_problems }: NavbarProps) {
  return (
    <nav className="py-10 w-full flex justify-center items-center">
      <div className="w-[60%] h-16 bg-[#333339] p-7 py-8 shadow-2xl text-[#a5a5af] rounded-lg flex items-center justify-between">
        <p className={`${ubuntu.className} text-xl`}>
          Total No. of Problems Solved:{' '}
          <span className="text-2xl px-2 text-[#bf950c]">
            0 / {total_problems}
          </span>
        </p>
        <ProfilePicture profile_picture={session.user.picture} />
      </div>
    </nav>
  );
}

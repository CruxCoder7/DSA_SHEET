import { Ubuntu } from 'next/font/google';
import { NavbarProps } from '@/types';
import ProfilePicture from './ProfilePicture';

const ubuntu = Ubuntu({ weight: '500', subsets: ['latin'] });

export default function Navbar({
  session_user,
  attempted_problems,
  total_solved,
}: NavbarProps) {
  return (
    <nav className="py-10 lg:md:px-0 px-3 w-full flex justify-center items-center">
      <div className="lg:md:w-[60%] w-full h-24 lg:h-16 md:h-16 bg-[#333339] p-7 py-8 shadow-2xl text-[#a5a5af] rounded-lg flex items-center justify-between">
        <p className={`${ubuntu.className} text-md lg:text-xl md:text-xl`}>
          Total No. of Problems Solved:{' '}
          <span className="text-2xl px-2 text-[#bf950c] text-center lg:text-start md:text-start lg:inline-block md:inline-block block">
            {total_solved} / {attempted_problems.length}
          </span>
        </p>
        <ProfilePicture profile_picture={session_user.picture} />
      </div>
    </nav>
  );
}

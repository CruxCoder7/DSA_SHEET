import { Claims } from '@auth0/nextjs-auth0';
import { Problems } from '@prisma/client';
import { Ubuntu } from 'next/font/google';
import ProfilePicture from './ProfilePicture';

type AttemptedProblem = Problems & {
  status: 'SOLVED' | 'REVISIT' | 'UNSOLVED';
};

type NavbarProps = {
  session_user: Claims;
  attempted_problems: AttemptedProblem[];
  total_solved: number;
};

const ubuntu = Ubuntu({ weight: '500', subsets: ['latin'] });

export default function Navbar({
  session_user,
  attempted_problems,
  total_solved,
}: NavbarProps) {
  return (
    <nav className="py-10 lg:md:px-0 px-3 w-full flex justify-center items-center">
      <div className="lg:md:w-[60%] w-full h-24  lg:md:h-16 bg-[#333339] p-7 py-8 shadow-2xl text-[#a5a5af] rounded-lg flex items-center justify-between">
        <p className={`${ubuntu.className} text-md lg:md:text-xl`}>
          Total No. of Problems Solved:{' '}
          <span className="text-2xl px-2 text-[#bf950c] text-center lg:md:text-start lg:md:inline-block  block">
            {total_solved} / {attempted_problems.length}
          </span>
        </p>
        <ProfilePicture profile_picture={session_user.picture} />
      </div>
    </nav>
  );
}

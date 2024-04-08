'use client';
import Navbar from '@/components/Navbar';
import { SheetProps } from '@/types';
import { Card } from '@/components/Card';
import { useState } from 'react';
import { Ubuntu } from 'next/font/google';
import GoBackButton from '@/components/GoBackButton';
import ScrollToTopButton from '@/components/ScollToTopButton';

const ubuntu = Ubuntu({ weight: '500', subsets: ['latin'] });

export default function Sheet({
  session_user,
  attempted_problems,
  problems,
  current_user_id,
}: SheetProps) {
  const [total_solved, setTotal_Solved] = useState(
    attempted_problems.reduce((acc, pb) => {
      if (pb.status === 'SOLVED') {
        return acc + 1;
      }
      return acc;
    }, 0)
  );

  return (
    <div className="w-full min-h-screen">
      <GoBackButton />
      <Navbar
        session_user={session_user}
        attempted_problems={attempted_problems}
        total_solved={total_solved}
      />
      <div className={`lg:md:w-[70%] w-full m-auto ${ubuntu.className}`}>
        <div className="grid grid-cols-1 gap-10 p-10">
          {problems.map((problem, i) => (
            <div key={i} id={problem.topic}>
              <Card
                topic={problem.topic}
                problem_names={problem.names}
                user_id={current_user_id}
                onStatusUpdate={setTotal_Solved}
                attempted_problems={attempted_problems}
              />
            </div>
          ))}
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
}

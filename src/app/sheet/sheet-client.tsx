'use client';
import { Card } from '@/components/Card';
import Navbar from '@/components/Navbar';
import { Ubuntu } from 'next/font/google';
import { useState } from 'react';
import { SheetProps } from '../../../types/types';

const ubuntu = Ubuntu({ weight: '500', subsets: ['latin'] });

export default function SheetClient({
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
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

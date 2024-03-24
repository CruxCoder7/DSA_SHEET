import { getCurrentUser } from '@/actions/getCurrentUser';
import { Card } from '@/components/Card';
import Navbar from '@/components/Navbar';
import prisma from '@/db';
import { getSession } from '@auth0/nextjs-auth0';
import { Problems } from '@prisma/client';
import { Ubuntu } from 'next/font/google';
import { redirect } from 'next/navigation';

const ubuntu = Ubuntu({ weight: '500', subsets: ['latin'] });

type AttemptedProblem = Problems & {
  status: 'SOLVED' | 'REVISIT' | 'UNSOLVED';
};

type GroupByTopicType = { topic: string; names: AttemptedProblem[] }[];

function groupByTopic(people: AttemptedProblem[]): GroupByTopicType {
  const groupedArray: GroupByTopicType = [];

  for (let i = 0; i < people.length; i++) {
    const { topic } = people[i];
    let found = false;
    for (let j = 0; j < groupedArray.length; j++) {
      if (groupedArray[j].topic === topic) {
        groupedArray[j].names.push(people[i]);
        found = true;
        break;
      }
    }
    if (!found) {
      groupedArray.push({ topic, names: [people[i]] });
    }
  }

  return groupedArray;
}

export default async function Sheet() {
  const session = await getSession();
  if (!session) return redirect('/');

  const current_user_id = await getCurrentUser(session);
  if (!current_user_id) return;

  const user = await prisma.user.findUnique({
    where: {
      id: current_user_id,
    },
  });

  if (!user) return;

  const attempted_problems = user.attempted_problems as AttemptedProblem[];
  const problems = groupByTopic(attempted_problems);

  return (
    <div className="w-full min-h-screen">
      <Navbar session={session} attempted_problems={attempted_problems} />
      <div className={`lg:md:w-[70%] w-full m-auto ${ubuntu.className}`}>
        <div className="grid grid-cols-1 gap-10 p-10">
          {problems.map((problem, i) => (
            <div key={i} id={problem.topic}>
              <Card
                topic={problem.topic}
                problem_names={problem.names}
                user_id={current_user_id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

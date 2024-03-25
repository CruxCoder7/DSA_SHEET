import { getCurrentUser } from '@/actions/getCurrentUser';
import { Claims, Session, getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';
import prisma from '@/db';
import { Problems } from '@prisma/client';
import Sheet from './page';

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

export default async function SheetLayout() {
  const session = await getSession();
  if (!session) return redirect('/');

  const current_user_id = await getCurrentUser(session as Session);
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
    <Sheet
      session_user={session.user as Claims}
      current_user_id={current_user_id}
      attempted_problems={attempted_problems}
      problems={problems}
    />
  );
}

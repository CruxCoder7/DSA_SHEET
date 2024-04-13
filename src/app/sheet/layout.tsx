import { getCurrentUser } from '@/actions/getCurrentUser';
import { ExtendedProblem, OutputObject } from '@/types';
import { Claims, getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';
import Sheet from './page';

function groupByTopic(input: ExtendedProblem): OutputObject {
  const output: OutputObject = {};

  for (const key in input) {
    const itemId = key;
    const item = input[key];
    const topic = item.topic;
    if (!output[topic]) {
      output[topic] = [];
    }
    output[topic].push({ id: itemId, ...item });
  }

  return output;
}

export default async function SheetLayout() {
  const session = await getSession();
  if (!session) return redirect('/');

  const user = await getCurrentUser(session);

  if (!user) return;

  const attempted_problems = user.attempted_problems as ExtendedProblem;
  const problems = groupByTopic(attempted_problems);

  return (
    <Sheet
      session_user={session.user as Claims}
      current_user_id={user.id}
      attempted_problems={attempted_problems}
      problems={problems}
    />
  );
}

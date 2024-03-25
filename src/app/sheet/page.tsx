import { Problems } from '@prisma/client';
import SheetClient from './sheet-client';
import { Claims } from '@auth0/nextjs-auth0';

type AttemptedProblem = Problems & {
  status: 'SOLVED' | 'REVISIT' | 'UNSOLVED';
};

type GroupByTopicType = { topic: string; names: AttemptedProblem[] }[];

type SheetProps = {
  session_user: Claims;
  attempted_problems: AttemptedProblem[];
  problems: GroupByTopicType;
  current_user_id: string;
};

export default function Sheet({
  session_user,
  attempted_problems,
  problems,
  current_user_id,
}: SheetProps) {
  return (
    <SheetClient
      session_user={session_user}
      current_user_id={current_user_id}
      attempted_problems={attempted_problems}
      problems={problems}
    />
  );
}

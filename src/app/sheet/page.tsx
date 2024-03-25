import { SheetProps } from '../../../types/types';
import SheetClient from './sheet-client';

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

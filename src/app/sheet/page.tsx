import Navbar from '@/components/Navbar';
import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';

export default async function Sheet() {
  const session = await getSession();
  if (!session) return redirect('/');

  return (
    <div className="w-full min-h-screen">
      <Navbar session={session} />
    </div>
  );
}

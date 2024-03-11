import Navbar from '@/components/Navbar';
import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';
import prisma from '@/db';
import { Problems } from '@prisma/client';
import { Ubuntu } from 'next/font/google';
import { IoIosArrowDown } from 'react-icons/io';

const ubuntu = Ubuntu({ weight: '500', subsets: ['latin'] });

function groupByNameByTopic(
  people: Problems[]
): { topic: string; names: string[] }[] {
  const groupedArray: { topic: string; names: string[] }[] = [];

  for (let i = 0; i < people.length; i++) {
    const { name, topic } = people[i];
    let found = false;
    for (let j = 0; j < groupedArray.length; j++) {
      if (groupedArray[j].topic === topic) {
        groupedArray[j].names.push(name);
        found = true;
        break;
      }
    }
    if (!found) {
      groupedArray.push({ topic, names: [name] });
    }
  }

  return groupedArray;
}

export default async function Sheet({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const session = await getSession();
  if (!session) return redirect('/');

  console.log(searchParams);

  const data = await prisma.problems.findMany({
    orderBy: {
      id: 'asc',
    },
  });

  const problems = groupByNameByTopic(data);

  return (
    <div className="w-full min-h-screen">
      <Navbar session={session} total_problems={data.length} />
      <div className={`w-[70%] m-auto ${ubuntu.className}`}>
        <div className="grid grid-cols-1 gap-10 p-10">
          {problems.map((problem, i) => (
            <div key={i} id={problem.topic}>
              <div className="col-span-1 row-span-1 bg-[#333339] text-red-500 h-20 flex justify-between px-5 items-center text-2xl cursor-pointer">
                {problem.topic}
                <IoIosArrowDown color="white" />
              </div>
              <div className="bg-[#27272a] grid grid-cols-1 gap-5">
                {problem.names.map((pb, j) => (
                  <div
                    key={j}
                    className={`text-white  w-full p-5 ${
                      j + 1 !== problem.names.length ? 'border-b' : 'border-b-0'
                    }`}
                  >
                    {pb}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

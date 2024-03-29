import { Ubuntu } from 'next/font/google';
import Link from 'next/link';
import {
  PiArrowBendDownLeftThin,
  PiArrowBendDownRightThin,
} from 'react-icons/pi';

const ubuntu = Ubuntu({ weight: '500', subsets: ['latin'] });

export default function Roadmap() {
  return (
    <section
      className="min-h-screen mt-16 p-16 flex justify-center"
      id="roadmap"
    >
      <div className="lg:md:w-[70vw] w-screen">
        <div className="grid grid-cols-2 gap-10 lg:md:p-10 lg:md:w-full w-screen p-5">
          <Link
            href={'/sheet#Linked List'}
            className={`${ubuntu.className}
               bg-[#333339] text-white rounded-lg shadow-xl hover-tooltip
               hover:shadow-red-600 col-span-1 text-center lg:md:px-3 lg:md:py-6 row-span-1 col-start-1 row-start-1
               flex w-full p-8 items-center justify-center
            `}
            title={`
             💡 Important Topics
                - Reversing a Linked List
                - Floyd's Tortoise and Hare Algorithm
                `}
          >
            Linked List
          </Link>
          <PiArrowBendDownRightThin
            color="white"
            className="col-span-1 lg:ml-80 md:ml-40 ml-16 row-span-1 col-start-1 row-start-2 "
            size={70}
          />
          <Link
            href={'/sheet#Arrays & HashMap'}
            className={`${ubuntu.className} bg-[#27272a] text-white rounded-lg shadow-xl hover-tooltip
               hover:shadow-[#bf950c] col-span-1 text-center p-6 mt-auto row-span-1 col-start-2 
               row-start-2`}
            title={`💡 HashMap comes in handy when we need to reduce time complexity.`}
          >
            Arrays & HashMap
          </Link>
          <PiArrowBendDownLeftThin
            color="white"
            className="col-span-1 row-span-1 col-start-2 row-start-3"
            size={70}
          />
          <Link
            href={'/sheet#Two Pointers & Sliding Window'}
            className={`${ubuntu.className} bg-[#333339] text-white rounded-lg shadow-xl hover-tooltip
               hover:shadow-red-600 text-center p-6 mt-auto col-span-1 row-span-1 col-start-1 row-start-3`}
            title="💡 One of the most important topics asked in interviews."
          >
            Two Pointers & Sliding Window
          </Link>
          <PiArrowBendDownRightThin
            color="white"
            className="col-span-1 lg:ml-80 md:ml-40 ml-16 row-span-1 col-start-1 row-start-4"
            size={70}
          />
          <Link
            href={'/sheet#Prefix Sums'}
            className={`${ubuntu.className} bg-[#27272a] text-white rounded-lg shadow-xl hover-tooltip
               hover:shadow-[#bf950c] text-center p-6 mt-auto col-span-1 row-span-1 col-start-2 row-start-4`}
            title="💡Focus on 1D and 2D Prefix Sum"
          >
            Prefix Sums
          </Link>
          <PiArrowBendDownLeftThin
            color="white"
            className="col-span-1 row-span-1 col-start-2 row-start-5"
            size={70}
          />
          <Link
            href={'/sheet#Binary Search'}
            className={`${ubuntu.className} bg-[#333339] text-white rounded-lg shadow-xl hover-tooltip
               hover:shadow-red-600 text-center p-6 mt-auto col-span-1 row-span-1 col-start-1 row-start-5`}
            title="💡One of the most important topics asked in interviews."
          >
            Binary Search
          </Link>
          <PiArrowBendDownRightThin
            color="white"
            className="col-span-1 lg:ml-80 md:ml-40 ml-16 row-span-1 col-start-1 row-start-6"
            size={70}
          />
          <Link
            href={'/sheet#Stack & Queue'}
            className={`${ubuntu.className} bg-[#27272a] text-white rounded-lg shadow-xl hover-tooltip
               hover:shadow-[#bf950c] text-center p-6 mt-auto col-span-1 row-span-1 col-start-2 row-start-6`}
            title="💡Lays the foundation for graph traversal algorithms."
          >
            Stack & Queue
          </Link>
          <PiArrowBendDownLeftThin
            color="white"
            className="col-span-1 row-span-1 col-start-2 row-start-7"
            size={70}
          />
          <Link
            href={'/sheet#Heaps/Priority Queues'}
            className={`${ubuntu.className} bg-[#333339] text-white rounded-lg shadow-xl hover-tooltip
               hover:shadow-red-600 text-center p-6 mt-auto col-span-1 row-span-1 col-start-1 row-start-7`}
            title="💡Lays the foundation for certain graph algorithms and is one of the favorite topics of many companies including MAANG."
          >
            Heaps / Priority Queues
          </Link>
          <PiArrowBendDownRightThin
            color="white"
            className="col-span-1 lg:ml-80 md:ml-40 ml-16 row-span-1 col-start-1 row-start-8"
            size={70}
          />
          <Link
            href={'/sheet#Intervals'}
            className={`${ubuntu.className} bg-[#27272a] text-white rounded-lg shadow-xl hover-tooltip
               hover:shadow-[#bf950c] text-center p-6 mt-auto col-span-1 row-span-1 col-start-2 row-start-8`}
            title="💡It all depends on how you sort, either the first value or the second value."
          >
            Intervals
          </Link>
          <PiArrowBendDownLeftThin
            color="white"
            className="col-span-1 row-span-1 col-start-2 row-start-9"
            size={70}
          />
          <Link
            href={'/sheet#Binary Tree'}
            className={`${ubuntu.className} bg-[#333339] text-white rounded-lg shadow-xl hover-tooltip
               hover:shadow-red-600 text-center p-6 mt-auto col-span-1 row-span-1 col-start-1 row-start-9`}
            title="💡One of the Most Important Topic"
          >
            Binary Tree
          </Link>
          <PiArrowBendDownRightThin
            color="white"
            className="col-span-1 lg:ml-80 md:ml-40 ml-16 row-span-1 col-start-1 row-start-10"
            size={70}
          />
          <Link
            href={'/sheet#Backtracking'}
            className={`${ubuntu.className} bg-[#27272a] text-white rounded-lg shadow-xl hover-tooltip
               hover:shadow-[#bf950c] text-center p-6 mt-auto col-span-1 row-span-1 col-start-2 row-start-10`}
            title="💡One of the easier topics if you know recursion."
          >
            Backtracking
          </Link>
          <PiArrowBendDownLeftThin
            color="white"
            className="col-span-1 row-span-1 col-start-2 row-start-11"
            size={70}
          />
          <Link
            href={'/sheet#Trie / Prefix Tree'}
            className={`${ubuntu.className} bg-[#333339] text-white rounded-lg shadow-xl hover-tooltip
               hover:shadow-red-600 text-center p-6 mt-auto col-span-1 row-span-1 col-start-1 row-start-11`}
            title="💡Don't know when it comes in handy, so it's better to learn"
          >
            Trie / Prefix Tree
          </Link>
          <PiArrowBendDownRightThin
            color="white"
            className="col-span-1 lg:ml-80 md:ml-40 ml-16 row-span-1 col-start-1 row-start-12"
            size={70}
          />
          <Link
            href={'/sheet#Graphs'}
            className={`${ubuntu.className} bg-[#27272a] text-white rounded-lg shadow-xl hover-tooltip
               hover:shadow-[#bf950c] text-center p-6 mt-auto col-span-1 row-span-1 col-start-2 row-start-12`}
            title={`
        💡 Important Topics
            - Graph Traversals - DFS, BFS, Multi Source BFS
            - Minimum Spanning Tree - Prims, Kruskal
            - Single Source Shortest Path - Dijkstra
            - All Source Shortest Path - Floyd Warshall
            - Topological Sort
            - Strongly Connected Components – Kosaraju’s Algorithm
            - Disjoint Set Union
          `}
          >
            Graphs
          </Link>
          <PiArrowBendDownLeftThin
            color="white"
            className="col-span-1 row-span-1 col-start-2 row-start-13"
            size={70}
          />
          <p
            className={`${ubuntu.className} bg-[#333339] text-white rounded-lg shadow-xl
               hover:shadow-red-600 text-center p-6 mt-auto col-span-1 row-span-1 col-start-1 row-start-13`}
            title="💡One of the Most Important and Confusing Topic"
          >
            1-D & 2-D Dynamic Programming
          </p>
        </div>
      </div>
    </section>
  );
}

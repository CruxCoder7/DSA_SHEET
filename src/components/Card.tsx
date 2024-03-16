'use client';
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { GrCheckboxSelected } from 'react-icons/gr';
import { Problems } from '@prisma/client';
import Link from 'next/link';
import updateProblemStatus from '@/actions/updateProblemStatus';

type AttemptedProblem = Problems & {
  status: 'SOLVED' | 'REVISIT' | 'UNSOLVED';
};

type CheckboxStates = {
  [key: string]: {
    checked: boolean;
    status: 'SOLVED' | 'REVISIT' | 'UNSOLVED';
  };
};

export function Card({
  topic,
  problem_names,
  user_id,
}: {
  topic: string;
  problem_names: AttemptedProblem[];
  user_id: string;
}) {
  const [open, setIsOpen] = useState(true);
  const [checkboxStates, setCheckboxStates] = useState<CheckboxStates>(
    problem_names.reduce((acc: any, problem) => {
      acc[problem.id!] = {
        checked: problem.status === 'SOLVED' ? true : false,
        status: problem.status,
      };
      return acc;
    }, {})
  );

  const toggleCheckbox = (problemId: string) => {
    setCheckboxStates((prevState) => {
      const newState = { ...prevState };
      newState[problemId] = {
        checked: prevState[problemId].status === 'UNSOLVED' ? true : false,
        status:
          prevState[problemId].status === 'SOLVED' ? 'UNSOLVED' : 'SOLVED',
      };
      return newState;
    });
  };

  const handleCheckboxChange = (problemId: string) => {
    toggleCheckbox(problemId);

    const newStatus = checkboxStates[problemId].checked ? 'UNSOLVED' : 'SOLVED';
    updateProblemStatus({ user_id, problem_id: problemId, status: newStatus });
  };

  return (
    <>
      <div
        className="col-span-1 row-span-1 bg-[#333339] text-red-500 h-20 flex justify-between px-5 
        items-center text-2xl cursor-pointer"
        onClick={() => setIsOpen(!open)}
      >
        {topic}
        {open ? (
          <IoIosArrowUp color="white" />
        ) : (
          <IoIosArrowDown color="white" />
        )}
      </div>
      {open && (
        <SubCard
          problem_names={problem_names}
          user_id={user_id}
          checkboxStates={checkboxStates}
          onCheckboxChange={handleCheckboxChange}
        />
      )}
    </>
  );
}

function SubCard({
  problem_names,
  user_id,
  checkboxStates,
  onCheckboxChange,
}: {
  problem_names: AttemptedProblem[];
  user_id: string;
  checkboxStates: CheckboxStates;
  onCheckboxChange: (problemId: string) => void;
}) {
  return (
    <div className="bg-[#27272a] grid grid-cols-1 gap-5">
      {problem_names.map(({ name, id, link, difficulty, status }, index) => (
        <div
          key={id}
          className={`text-white flex justify-between items-center  w-full p-5 ${
            index + 1 !== problem_names.length ? 'border-b' : 'border-b-0'
          }`}
        >
          <div className="flex justify-center items-center gap-5">
            <Link href={link} target="_blank">
              {name}
            </Link>
            <p
              className={`text-xs mt-1 ${
                difficulty === 'EASY'
                  ? 'text-green-700'
                  : difficulty === 'MEDIUM'
                  ? 'text-yellow-600'
                  : 'text-red-800'
              }`}
            >
              {difficulty}
            </p>
          </div>
          <CheckBox
            problem_id={id!}
            user_id={user_id}
            status={checkboxStates[id!].status}
            isChecked={checkboxStates[id!].checked}
            onChange={() => onCheckboxChange(id!)}
          />
        </div>
      ))}
    </div>
  );
}

function CheckBox({
  status,
  isChecked,
  onChange,
}: {
  problem_id: string;
  user_id: string;
  status: 'SOLVED' | 'REVISIT' | 'UNSOLVED';
  isChecked: boolean;
  onChange: () => void;
}) {
  const checkboxColor =
    status === 'SOLVED' ? 'green' : isChecked ? 'green' : 'white';

  return (
    <GrCheckboxSelected
      color={checkboxColor}
      size={30}
      className="cursor-pointer"
      onClick={onChange}
    />
  );
}

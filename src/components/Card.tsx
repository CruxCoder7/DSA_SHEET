'use client';
import updateProblemStatus from '@/actions/updateProblemStatus';
import {
  CardProps,
  CheckBoxProps,
  CheckboxStates,
  SubCardProps,
} from '@/types';
import Link from 'next/link';
import { useState } from 'react';
import { GrCheckboxSelected } from 'react-icons/gr';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import LinearWithValueLabel from './ProgressBar';

export function Card({
  topic,
  problem_names,
  user_id,
  onStatusUpdate,
  attempted_problems,
}: CardProps) {
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

  const initial_count = problem_names.reduce((acc, pb) => {
    if (pb.status === 'SOLVED') {
      return acc + 1;
    }
    return acc;
  }, 0);

  const [count, setCount] = useState(initial_count);

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

  const handleCheckboxChange = async (problemId: string) => {
    toggleCheckbox(problemId);

    const newStatus = checkboxStates[problemId].checked ? 'UNSOLVED' : 'SOLVED';
    if (newStatus === 'SOLVED') {
      setCount((prev) => prev + 1);
      onStatusUpdate((prev) => prev + 1);
    } else {
      setCount((prev) => prev - 1);
      onStatusUpdate((prev) => prev - 1);
    }
  };

  return (
    <>
      <div
        className="col-span-1 row-span-1 bg-[#333339] lg:h-20 md:h-20 h-24 flex flex-col md:flex-row lg:flex-row justify-between px-5 
        items-center cursor-pointer"
        onClick={() => setIsOpen(!open)}
      >
        <p
          className="text-red-500 lg:text-left 
        md:text-left text-center text-xl lg:md:mt-0 mt-2 lg:w-[50%] md:w-[50%]"
        >
          {topic}
        </p>
        <LinearWithValueLabel
          progress_value={count}
          max_value={problem_names.length}
        />
        {open ? (
          <IoIosArrowUp color="white" className="hidden lg:md:block" />
        ) : (
          <IoIosArrowDown color="white" className="hidden lg:md:block" />
        )}
      </div>
      {open && (
        <SubCard
          problem_names={problem_names}
          user_id={user_id}
          checkboxStates={checkboxStates}
          onCheckboxChange={handleCheckboxChange}
          attempted_problems={attempted_problems}
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
  attempted_problems,
}: SubCardProps) {
  return (
    <div className={`bg-[#27272a] grid grid-cols-1 gap-5`}>
      {problem_names.map(({ name, id, link, difficulty }, index) => (
        <div
          key={id}
          className={`text-white flex justify-between items-center w-full p-5 ${
            index + 1 !== problem_names.length ? 'border-b' : 'border-b-0'
          }`}
        >
          <div className="flex flex-col justify-center gap-3 w-[70%] lg:md:w-full">
            <Link
              href={link}
              target="_blank"
              className="hover:underline w-fit lg:md:text-lg"
            >
              {name}
            </Link>
            <p
              className={`text-xs 0 mt-0 lg:md:mt-1 ${
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
          <button type="submit">
            <CheckBox
              problem_id={id!}
              user_id={user_id}
              status={checkboxStates[id!].status}
              isChecked={checkboxStates[id!].checked}
              onChange={() => onCheckboxChange(id!)}
              attempted_problems={attempted_problems}
            />
          </button>
        </div>
      ))}
    </div>
  );
}

function CheckBox({
  status,
  isChecked,
  onChange,
  attempted_problems,
  problem_id,
  user_id,
}: CheckBoxProps) {
  const checkboxColor =
    status === 'SOLVED' ? 'green' : isChecked ? 'green' : 'white';

  const updateAction = updateProblemStatus.bind(null, {
    attempted_problems,
    problem_id,
    status,
    user_id,
  });

  return (
    <form action={updateAction}>
      <button type="submit">
        <GrCheckboxSelected
          color={checkboxColor}
          size={30}
          className="cursor-pointer"
          onClick={onChange}
        />
      </button>
    </form>
  );
}

'use client';
import { Problems } from "@prisma/client";
import { useState } from "react";

type AttemptedProblem = Problems & {
    status: 'SOLVED' | 'REVISIT' | 'UNSOLVED';
};

type CheckboxStates = {
    [key: string]: {
        checked: boolean;
        status: 'SOLVED' | 'REVISIT' | 'UNSOLVED';
    };
};

export default function useProblems({ problem_names }: { problem_names: AttemptedProblem[]; }) {
    const [checkboxStates, setCheckboxStates] = useState<CheckboxStates>(
        problem_names.reduce((acc: any, problem) => {
            acc[problem.id!] = {
                checked: problem.status === 'SOLVED' ? true : false,
                status: problem.status,
            };
            return acc;
        }, {})
    );

    return [checkboxStates, setCheckboxStates];
}
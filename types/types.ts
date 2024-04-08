import { Claims } from "@auth0/nextjs-auth0";
import { Problems } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";

export type AttemptedProblem = Problems & {
    status: 'SOLVED' | 'REVISIT' | 'UNSOLVED';
};

export type GroupByTopicType = { topic: string; names: AttemptedProblem[]; }[];

export type SheetProps = {
    session_user: Claims;
    attempted_problems: AttemptedProblem[];
    problems: GroupByTopicType;
    current_user_id: string;
};

export type CheckboxStates = {
    [key: string]: {
        checked: boolean;
        status: 'SOLVED' | 'REVISIT' | 'UNSOLVED';
    };
};

export type NavbarProps = {
    session_user: Claims;
    attempted_problems: AttemptedProblem[];
    total_solved: number;
};

export type CardProps = {
    topic: string;
    problem_names: AttemptedProblem[];
    user_id: string;
    onStatusUpdate: Dispatch<SetStateAction<number>>;
    attempted_problems: AttemptedProblem[];

};

export type SubCardProps = {
    problem_names: AttemptedProblem[];
    user_id: string;
    checkboxStates: CheckboxStates;
    onCheckboxChange: (problemId: string) => void;
};

export type CheckBoxProps = {
    problem_id: string;
    user_id: string;
    status: 'SOLVED' | 'REVISIT' | 'UNSOLVED';
    isChecked: boolean;
    onChange: () => void;
};
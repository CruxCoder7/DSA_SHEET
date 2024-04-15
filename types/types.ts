import { Claims } from "@auth0/nextjs-auth0";
import { $Enums, Problems } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";

export type OutputObject = {
    [key: string]: Array<{
        id: string;
        difficulty: string;
        link: string;
        name: string;
        topic: string;
        status: 'SOLVED' | 'REVISIT' | 'UNSOLVED';
    }>;
};

export type AttemptedProblem = Problems & {
    status: 'SOLVED' | 'REVISIT' | 'UNSOLVED';
};

export type ExtendedProblem = {
    [key: string]: {
        difficulty: $Enums.Difficulty;
        link: string;
        name: string;
        topic: string;
        status: "SOLVED" | "REVISIT" | "UNSOLVED";
    };
};

export type GroupByTopicType = {
    [key: string]: Array<{
        id: string;
        difficulty: string;
        link: string;
        name: string;
        topic: string;
        status: 'SOLVED' | 'REVISIT' | 'UNSOLVED';
    }>;
};

export type SheetProps = {
    session_user: Claims;
    attempted_problems: ExtendedProblem;
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
    attempted_problems: ExtendedProblem;
    total_solved: number;
};

export type CardProps = {
    topic: string;
    problem_names: Array<{
        id: string;
        difficulty: string;
        link: string;
        name: string;
        topic: string;
        status: 'SOLVED' | 'REVISIT' | 'UNSOLVED';
    }>;

    user_id: string;
    onStatusUpdate: Dispatch<SetStateAction<number>>;
    attempted_problems: ExtendedProblem;

};

export type SubCardProps = {
    problem_names: Array<{
        id: string;
        difficulty: string;
        link: string;
        name: string;
        topic: string;
        status: 'SOLVED' | 'REVISIT' | 'UNSOLVED';
    }>;
    user_id: string;
    checkboxStates: CheckboxStates;
    onCheckboxChange: (problemId: string) => void;
    attempted_problems: ExtendedProblem;

};

export type CheckBoxProps = {
    problem_id: string;
    user_id: string;
    status: 'SOLVED' | 'REVISIT' | 'UNSOLVED';
    isChecked: boolean;
    onChange: () => void;
    attempted_problems: ExtendedProblem;
};

export type ActionProps = {
    user_id: string, problem_id: string,
    status: "REVISIT" | "SOLVED" | "UNSOLVED",
    attempted_problems: ExtendedProblem;
};
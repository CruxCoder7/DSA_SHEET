import prisma from '@/db';
import { AttemptedProblem, ExtendedProblem } from '@/types';
import { NextRequest } from 'next/server';

async function InsertProblems() {
    const problem_set: AttemptedProblem[] = await prisma.problems.findMany() as unknown as AttemptedProblem[];

    const object_problem_set: ExtendedProblem = {};

    for (let i = 0; i < problem_set.length; i++) {
        const { id, ...data } = problem_set[i];
        object_problem_set[problem_set[i].id] = { ...data, status: 'UNSOLVED' };
    }
    return object_problem_set;
}

export async function POST(req: NextRequest) {
    const data = await req.json();
    const parsed_data = JSON.parse(data.data);

    if (parsed_data.connection.strategy === "auth0" && parsed_data.place === 'PostLogin') {
        return Response.json({}, {
            status: 200
        });
    }

    let { name, email } = parsed_data.user;

    if (parsed_data.connection.strategy === "auth0") {
        name = parsed_data.user.username;
    }

    const user = await prisma.user.create({
        data: {
            name,
            email,
            attempted_problems: await InsertProblems()
        }
    });

    return Response.json({ user }, {
        status: 200
    });
}   
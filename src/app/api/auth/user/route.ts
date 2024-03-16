import prisma from '@/db';
import { NextRequest } from 'next/server';

async function InsertProblems() {
    const problem_set = await prisma.problems.findMany() as unknown as { status: string; }[];

    for (let i = 0; i < problem_set.length; i++) {
        problem_set[i].status = "UNSOLVED";
    }
    return problem_set;
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
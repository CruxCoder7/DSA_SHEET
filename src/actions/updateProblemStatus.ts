'use server';
import prisma from "@/db";
import { Problems } from "@prisma/client";
import { revalidatePath } from "next/cache";

type AttemptedProblem = Problems & {
    status: "SOLVED" | "REVISIT" | "UNSOLVED";
};

export default async function updateProblemStatus({ user_id, problem_id, status, attempted_problems }: {
    user_id: string, problem_id: string,
    status: "REVISIT" | "SOLVED" | "UNSOLVED",
    attempted_problems: AttemptedProblem[];
}) {

    for (let i = 0; i < attempted_problems.length; i++) {
        if (attempted_problems[i].id === problem_id) {
            attempted_problems[i].status = status;
        }
    }

    await prisma.user.update({
        where: { id: user_id },
        data: {
            attempted_problems
        }
    });

    revalidatePath('/sheet');
}
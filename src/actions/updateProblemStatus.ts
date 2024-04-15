'use server';
import prisma from "@/db";
import { ActionProps } from "@/types";
import { revalidatePath } from "next/cache";

export default async function updateProblemStatus(
    { user_id, problem_id, status, attempted_problems }: ActionProps, _formData: FormData) {
    attempted_problems[problem_id].status = status;

    await prisma.user.update({
        where: { id: user_id },
        data: {
            attempted_problems
        }
    });

    revalidatePath('/sheet');
}
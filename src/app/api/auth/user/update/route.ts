import prisma from "@/db";
import { ExtendedProblem } from "@/types";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    const data: {
        user_id: string,
        problem_id: string,
        status: "REVISIT" | "SOLVED" | "UNSOLVED",
        attempted_problems: ExtendedProblem;
    } = await req.json();

    data.attempted_problems[data.problem_id].status = data.status;

    await prisma.user.update({
        where: { id: data.user_id },
        data: {
            attempted_problems: data.attempted_problems
        }
    });

    revalidatePath('/sheet');
    return Response.json({
        status: 200
    });
}

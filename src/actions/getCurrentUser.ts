'use server';

import { Session } from "@auth0/nextjs-auth0";
import prisma from "@/db";

export async function getCurrentUser(session: Session) {
    const { email } = session.user;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return;
    return user.id;
}
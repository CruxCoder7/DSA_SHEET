import prisma from '@/db';
import { NextRequest } from 'next/server';

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
            email
        }
    });
    prisma.user.update({
        where: {
            email
        },
        data: {
            attempted_problems: {
                connect: {
                    id: '',
                    status: 'SOLVED',
                },
            }
        }
    });
    return Response.json({ user }, {
        status: 200
    });
}   
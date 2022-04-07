import { withApiSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>,
) {
    const {
        query: { id },
        session: { user },
    } = req;
    const cleandId = +id.toString();

    const alreadyExists = await client.wondering.findFirst({
        where: {
            userId: user?.id,
            postId: cleandId,
        },
    });
    if (alreadyExists) {
        // delete wonder
        await client.wondering.delete({
            where: {
                id: alreadyExists.id,
            },
            select: {
                id: true,
            }
        });
    } else {
        // create wonder
        await client.wondering.create({
            data: {
                user: {
                    connect: {
                        id: user?.id,
                    },
                },
                post: {
                    connect: {
                        id: cleandId,
                    },
                },
            },
        });
    }

    res.json({
        ok: true,
    });

}

export default withApiSession(
    withHandler({
        methods: ["POST"],
        handler,
        isPrivate: false,
    })
);
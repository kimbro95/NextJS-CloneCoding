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
        body: { answer },
    } = req;
    const cleandId = +id.toString();
    const post = await client.post.findUnique({
        where: {
            id: cleandId,
        },
    });

    if (!post) {
        res.status(404).json({ ok: false, error: "Not found post" });
    } else {
        const newAnswer = await client.answer.create({
            data: {
                answer,
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

        res.json({
            ok: true,
            answer: newAnswer,
        });
    }
}

export default withApiSession(
    withHandler({
        methods: ["POST"],
        handler,
        isPrivate: false,
    })
);
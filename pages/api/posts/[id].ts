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
    } = req;
    const cleandId = +id.toString();
    const post = await client.post.findUnique({
        where: {
            id: cleandId,
        },
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                    avatar: true,
                },
            },
            answer: {
                select: {
                    id: true,
                    answer: true,
                    user: {
                        select: {
                            id: true,
                            name: true,
                            avatar: true,
                        },
                    },
                },
            },
            _count: {
                select: {
                    answer: true,
                    wondering: true,
                },
            },
        },
    });
    if (!post) {
        res.status(404).json({ ok: false, error: "Not found post" });
    } else {
        res.json({
            ok: true,
            post,
        });
    }
}

export default withApiSession(
    withHandler({
        methods: ["GET"],
        handler,
        isPrivate: false,
    })
);
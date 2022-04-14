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
        body,
    } = req;

    const message = await client.message.create({
        data:{
            message: body.message,
            stream: {
                connect: {
                    id: +id.toString(),
                },
            },
            user:{
                connect:{
                    id: user?.id,
                },
            },
        },
    });

    if (message) {
        res.json({
            ok: true,
            message,
        });
    } else {
        res.json({
            ok: false,
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
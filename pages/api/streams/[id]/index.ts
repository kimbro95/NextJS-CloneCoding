import { withApiSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>,
) {
    const {
        query: { id }
    } = req;

    const stream = await client.stream.findUnique({
        where: {
            id: +id.toString(),
        },
    });
    if (stream) {
        res.json({
            ok: true,
            stream,
        });
    } else {
        res.json({
            ok: false,
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
import { withApiSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>,
) {
    const {
        session: { user },
    } = req;

    const favs = await client.fav.findMany({
        where: {
            userId: user?.id,
        },
        include: {
            product: {
                include: {
                    _count: {
                        select: {
                            favs: true,
                        },
                    },
                },
            },
        },
    });

    try {
        res.json({
            ok: true,
            favs,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            error,
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
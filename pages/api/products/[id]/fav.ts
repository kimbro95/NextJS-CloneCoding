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
    const product = await client.product.findUnique({
        where: {
            id: cleandId,
        },
    });
    if (!product) {
        res.status(404).json({ ok: false, error: "Not found post" });
    } else {
        const alreadyExists = await client.fav.findFirst({
            where: {
                productID: cleandId,
                userId: user?.id,
            },
        });
        if (alreadyExists) {
            // delete fav
            await client.fav.delete({
                where: {
                    id: alreadyExists.id
                },
            });
        } else {
            // create fav
            await client.fav.create({
                data: {
                    user: {
                        connect: {
                            id: user?.id,
                        },
                    },
                    product: {
                        connect: {
                            id: cleandId,
                        },
                    },
                },
            });
        }

        try {
            res.json({
                ok: true,
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                ok: false,
                error,
            });
        }
    }
}

export default withApiSession(
    withHandler({
        methods: ["POST"],
        handler,
        isPrivate: false,
    })
);
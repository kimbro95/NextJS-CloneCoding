import { withApiSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>,
) {
    const {
        query: { page },
    } = req;
    if (req.method === "GET") {
        const productCount = await client.product.count();
        const products = await client.product.findMany({
            include: {
                _count: {
                    select: {
                        favs: true,
                    },
                },
            },
            orderBy: {
                createdAt: "desc",
            },
            take: 10,
            skip: (+page - 1) * 10,
        });
        res.json({
            ok: true,
            products,
            pages: Math.ceil(productCount / 10),
        });
    }
    if (req.method === "POST") {
        const {
            body: { name, price, description },
            session: { user },
        } = req;
        const product = await client.product.create({
            data: {
                name,
                price: +price,
                description,
                image: "abc",
                user: {
                    connect: {
                        id: user?.id,
                    },
                },
            },
        });
        res.json({
            ok: true,
            product,
        });
    }
}

export default withApiSession(
    withHandler({
        methods: ["GET", "POST"],
        handler,
        isPrivate: false,
    })
);
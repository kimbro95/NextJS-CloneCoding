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
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                    avatar: true,
                },
            },
        },
    });

    if (!product) {
        res.status(404).json({ ok: false, error: "Not found post" });
    } else {
        const terms = product?.name.split(" ").map((word) => ({
            name: {
                contains: word,
            },
        }));
        const relatedProducts = await client.product.findMany({
            where: {
                OR: terms,
                AND: {
                    id: {
                        not: cleandId,
                    },
                },
            },
            orderBy: {
                createdAt: "desc",
            },
            take: 4,
        });
        const isLiked = Boolean(
            await client.fav.findFirst({
                where: {
                    productID: product?.id,
                    userId: user?.id,
                },
                select: {
                    id: true,
                },
            })
        );
        /*
        count를 이용한 fav 조회
        const isLikedCount = await client.fav.count({
            where: {
                productID: product?.id,
                userId: user?.id,
            },
        });
        isLiked: Boolean(isLikedCount);
        */
        res.json({
            ok: true,
            product,
            isLiked,
            relatedProducts,
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
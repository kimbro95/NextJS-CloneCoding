import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "@libs/server/withHandler";
import client from "@libs/server/client";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const { email, phone } = req.body;
    const enterType = phone ? { phone: +phone } : { email };
    const payload = Math.floor(100000 + Math.random() * 900000) + "";
    const token = await client.token.create({
        data: {
            payload,
            user: {
                connectOrCreate: {
                    where: {
                        ...enterType,
                    },
                    create: {
                        name: "user1",
                        ...enterType,
                    },
                },
            },
        },
    });
    console.log(token);
    return res.status(200).end();
}

export default withHandler("POST", handler);
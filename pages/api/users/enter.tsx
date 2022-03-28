import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "@libs/server/withHandler";
import client from "@libs/server/client";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const { email, phone } = req.body;
    const enterType = phone ? { phone: +phone } : { email };
    const user = await client.user.upsert({
        where: {
            ...enterType,
        },
        create: {
            name: "user1",
            ...enterType,
        },
        update: {
        },
    });
    console.log(user)
    return res.status(200).end();
}

export default withHandler("POST", handler);
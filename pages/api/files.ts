import { withApiSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>,
) {
    const response = await (await fetch(
        `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/images/v1/direct_upload`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
            },
        }
    )).json();

    res.json({
        ok: true,
        ...response.result,
    });

}

export default withApiSession(
    withHandler({
        methods: ["GET"],
        handler,
        isPrivate: false,
    })
);
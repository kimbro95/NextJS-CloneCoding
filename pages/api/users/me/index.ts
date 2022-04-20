import { withApiSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>,
) {
    if (req.method === "GET") {
        const profile = await client.user.findUnique({
            where: {
                id: req.session.user?.id
            },
        });

        res.json({
            ok: true,
            profile,
        });
    }

    if (req.method === "POST") {
        const {
            session: { user },
            body: { email, phone, name, avatarId },
        } = req;

        const currentUser = await client.user.findUnique({
            where: {
                id: user?.id,
            },
        });
        if (name) {
            // update
            await client.user.update({
                where: {
                    id: user?.id,
                },
                data: {
                    phone
                },
            });
        }

        if (email && email !== currentUser?.email) {
            // check Email value
            const alreadyExists = Boolean(
                await client.user.findUnique({
                    where: {
                        email,
                    },
                    select: {
                        id: true,
                    },
                })
            );
            if (alreadyExists) {
                return res.json({
                    ok: false,
                    error: "Email already taken."
                });
            }
            // update
            await client.user.update({
                where: {
                    id: user?.id,
                },
                data: {
                    email
                },
            });
            res.json({ ok: true });
        }

        if (phone && phone !== currentUser?.phone) {
            // check Phone value
            const alreadyExists = Boolean(
                await client.user.findUnique({
                    where: {
                        phone,
                    },
                    select: {
                        id: true,
                    },
                })
            );
            if (alreadyExists) {
                return res.json({
                    ok: false,
                    error: "Phone number already taken."
                });
            }

            // update
            await client.user.update({
                where: {
                    id: user?.id,
                },
                data: {
                    phone
                },
            });
        }
        if (avatarId) {
            await client.user.update({
                where: {
                    id: user?.id,
                },
                data: {
                    avatar: avatarId,
                },
            });
        }
        res.json({ ok: true });
    }
}

export default withApiSession(
    withHandler({
        methods: ["GET", "POST"],
        handler,
        isPrivate: false,
    })
);
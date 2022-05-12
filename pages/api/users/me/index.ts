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

        try {
            res.json({
                ok: true,
                profile,
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                ok: false,
                error,
            });
        }
    }

    if (req.method === "POST") {
        const {
            session: { user },
            body: { email, phone, name, avatarId },
        } = req;
        console.log("POST1");
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
                    name
                },
            });
        }
        try {
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                ok: false,
                error,
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
        }
        try {
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                ok: false,
                error,
            });
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
        try {
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                ok: false,
                error,
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
        try {
            res.json({ ok: true });
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
        methods: ["GET", "POST"],
        handler,
        isPrivate: false,
    })
);
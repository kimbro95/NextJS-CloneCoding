import { NextPage } from "next";
import Input from "@components/input";
import Layout from "@components/layout";
import Message from "@components/message";
import { useRouter } from "next/router";
import useSWR from "swr";
import { Stream } from "@prisma/client";
import { useForm } from "react-hook-form";
import useMutation from "@libs/client/useMutation";
import useUser from "@libs/client/useUser";
import { useEffect } from "react";

interface StreamMessage {
    message: string;
    id: number;
    user: {
        avatar?: string;
        id: number;
    }
}

interface StreamWithMessages extends Stream {
    messages: StreamMessage[]
}

interface StreamResponse {
    ok: boolean;
    stream: StreamWithMessages;
}

interface MesaageForm {
    message: string;
}

const LiveDetail: NextPage = () => {
    const { user } = useUser();
    const router = useRouter();
    const { register, handleSubmit, reset } = useForm<MesaageForm>();
    const { data, mutate } = useSWR<StreamResponse>(
        router.query.id ? `/api/streams/${router.query.id}` : null, {
        refreshInterval: 1000,
    }
    );
    const [sendMessage, { loading, data: sendMessageData }] = useMutation(`/api/streams/${router.query.id}/messages`);
    const onValid = (form: MesaageForm) => {
        if (loading) return;
        reset();
        mutate((prev) =>
            prev &&
            ({
                ...prev,
                stream: {
                    ...prev.stream,
                    messages: [
                        ...prev.stream.messages,
                        {
                            id: Date.now(),
                            message: form.message,
                            user: {
                                ...user,
                            },
                        },
                    ],
                },
            } as any)
            , false);
        //sendMessage(form);
    }
    return (
        <Layout canGoBack title="Live">
            <div className="px-4 py-2 space-y-2 ">
                <div className="w-full bg-slate-400 rounded-md shadow-md aspect-video" />
                <h3 className="mt-2 font-bold text-gray-700 text-3xl">Live Streams...</h3>
                <div className="mt-5">
                    <h1 className="text-xl font-bold text-gray-700">{data?.stream?.name}</h1>
                    <span className="text-2xl block text-gray-700">${data?.stream?.price}</span>
                    <p className=" my-2 text-gray-700">
                        {data?.stream?.description}
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold text-gray-900">Live Chat</h2>
                    <div className="py-10 pb-16 h-[55vh] px-1 space-y-4 overflow-y-scroll">
                        {data?.stream.messages.map((message) => (
                            <Message
                                key={message.id}
                                message={message.message}
                                reversed={message.user.id === user?.id}
                            />
                        ))}
                    </div>
                </div>
                <form onSubmit={handleSubmit(onValid)} className="fixed px-2 py-2 bg-white bottom-0 inset-x-0">
                    <div className="flex items-center relative">
                        <input
                            type="text"
                            {...register("message", { required: true })}
                            className="shadow-sm rounded-full w-full border-gray-300 pr-12
                            focus:ring-orange-500 focus:outline-none focus:border-orange-500"
                        />
                        <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
                            <button
                                className="flex items-center bg-orange-500 rounded-full px-3 text-white font-bold
                                focus:ring-2 focus:ring-offset-2 focus:ring-orange-500
                                hover:bg-orange-600 cursor-pointer"
                            >&rarr;
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default LiveDetail;
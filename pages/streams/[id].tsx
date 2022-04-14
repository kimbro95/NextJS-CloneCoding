import { NextPage } from "next";
import Input from "@components/input";
import Layout from "@components/layout";
import Message from "@components/message";
import { useRouter } from "next/router";
import useSWR from "swr";
import { Stream } from "@prisma/client";

interface StreamResponse {
    ok: boolean;
    stream: Stream;
}

const LiveDetail: NextPage = () => {
    const router = useRouter();
    const { data } = useSWR<StreamResponse>(router.query.id ? `/api/streams/${router.query.id}` : null);
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
                        <Message message="Hello World !!!" />
                        <Message message="This is Carrot Market" />
                        <Message message="WoW" reversed />
                        <Message message="LOL!!!" />
                        <Message message="Hello World !!!" />
                        <Message message="This is Carrot Market" />
                        <Message message="WoW" reversed />
                        <Message message="LOL!!!" />
                        <Message message="Hello World !!!" />
                        <Message message="This is Carrot Market" />
                        <Message message="WoW" reversed />
                        <Message message="LOL!!!" />
                    </div>
                </div>
                <Input kind="chat" />
            </div>
        </Layout>
    )
}

export default LiveDetail;
import { NextPage } from "next";
import Link from "next/link";
import FloatingButton from "@components/floating-button";
import Layout from "@components/layout";
import { Stream } from "@prisma/client";
import useSWR from "swr";

interface StreamsResponse {
    ok: boolean;
    streams: Stream[];
}

const Streams: NextPage = () => {
    const { data } = useSWR<StreamsResponse>(`/api/streams`);
    return (
        <Layout title='Live' hasTabBar>
            <div className="space-y-4 divide-y-2">
                {data?.streams.map((stream) => (
                    <Link key={stream.id} href={`/streams/${stream.id}`}>
                        <a className="pt-2 px-4 block">
                            <div className="w-full bg-slate-400 rounded-md shadow-md aspect-video" />
                            <h3 className="mt-2 font-bold text-gray-700 text-lg">{stream.name}</h3>
                        </a>
                    </Link>
                ))}
                <FloatingButton href="/live/create">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 
                            01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 
                            2 0 00-2 2v8a2 2 0 002 2z"
                        />
                    </svg>
                </FloatingButton>
            </div>
        </Layout>
    )
}

export default Streams;
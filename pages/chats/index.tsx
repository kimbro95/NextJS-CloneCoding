import { NextPage } from "next";
import Link from "next/link";
import Layout from "@components/layout";

const Chats: NextPage = () => {
    return (
        <Layout title="Chat" hasTabBar seoTitle="Chats">
            <div className="divide-y-[1px]">
                {[...Array(5)].map((val, i) => (
                    <Link href={`/chats/${i}`} key={i}>
                        <a className="flex items-center cursor-pointer space-x-3 py-4 px-4">
                            <div className="h-12 w-12 rounded-full bg-slate-400" />
                            <div>
                                <p className="font-bold text-gray-800">Steve</p>
                                <p className="text-sm text-gray-500">Hello !!!</p>
                            </div>
                        </a>
                    </Link>
                ))}
            </div>
        </Layout>
    );
}

export default Chats;
import { NextPage } from "next";
import Link from "next/link";
import Layout from "@components/layout";
import FloatingButton from "@components/floating-button";
import { Post, User } from "@prisma/client";
import client from "@libs/server/client";
import useSWR from "swr";
import useCoords from "@libs/client/useCoords";

interface PostWithUser extends Post {
    user: User;
    _count: {
        wondering: number;
        answer: number;
    }
}

interface PostsResponse {
    //ok: boolean;
    posts: PostWithUser[];
}

const Community: NextPage<PostsResponse> = ({ posts }) => {
    /* ISR 사용을 위한 주석
    const { latitude, longitude } = useCoords();
    const { data } = useSWR<PostsResponse>(latitude && longitude ? `/api/posts?latitude=${latitude}&longitude=${longitude}` : null);
    */
    return (
        <Layout title="동네생활" hasTabBar seoTitle="Community">
            <div className="space-y-4 py-2">
                {posts?.map((post) => (
                    <Link href={`/community/${post.id}`} key={post.id}>
                        <a key={post.id} className="flex flex-col items-start mx-4">
                            <span
                                className="flex items-center rounded-full text-sm font-medium px-2 py-1 bg-gray-200 text-gray-800"
                            >
                                동네질문
                            </span>
                            <div className="mt-2 text-gray-700">
                                <span className="text-orange-500 font-medium">Q.</span> {post.question}
                            </div>
                            <div className="my-2 flex items-center justify-between w-full text-gray-500 font-medium text-xs">
                                <span>{post.user?.name}</span>
                                <span>{post.createdAt}</span>
                            </div>
                            <div className="flex space-x-2.5 py-2.5 text-gray-700 border-t border-b-[1.5px] w-full">
                                <span className="flex space-x-2 items-center text-sm">
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        >
                                        </path>
                                    </svg>
                                    <span>궁금해요 {post._count?.wondering}</span>
                                </span>
                                <span className="flex space-x-2 items-center text-sm">
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                        >
                                        </path>
                                    </svg>
                                    <span>답변 {post._count?.answer}</span>
                                </span>
                            </div>
                        </a>
                    </Link>
                ))}
                <FloatingButton href="/community/write">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        ></path>
                    </svg>
                </FloatingButton>
            </div>
        </Layout>
    );
};

export async function getStaticProps() {
    //console.log("check");
    const posts = await client.post.findMany({
        include: {
            user: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
    return {
        props: {
            posts: JSON.parse(JSON.stringify(posts)),
        },
        //revalidate: 20,
    };
}

export default Community;
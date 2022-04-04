import { NextPage } from "next";
import Button from "@components/button";
import Layout from "@components/layout";
import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";

const ItemDetail: NextPage = () => {
    const router = useRouter();
    const { data } = useSWR(router.query.id ? `/api/products/${router.query.id}` : null);
    console.log(data);
    return (
        <Layout canGoBack>
            <div className="px-4 py-2">
                <div className="mb-2">
                    <div className="h-96 bg-slate-500" />
                    <div className="flex items-center border-b border-t cursor-pointer space-x-3 py-4">
                        <div className="h-12 w-12 rounded-full bg-slate-400" />
                        <div>
                            <p className="text-md font-bold text-gray-800">{data?.product?.user?.name}</p>
                            <Link href={`/users/profiles/${data?.product?.user?.name}`}>
                                <a className="text-xs font-medium text-gray-500">View profile &rarr;</a>
                            </Link>
                        </div>
                    </div>
                    <div className="mt-3 pb-4 border-b">
                        <h1 className="text-3xl font-bold text-gray-800">{data?.product?.name}</h1>
                        <span className="block text-2xl text-gray-800">${data?.product?.price}</span>
                        <p className="text-base my-4 text-gray-700">
                            {data?.product?.description}
                        </p>
                        <div className="flex items-center justify-between space-x-3">
                            <Button large text="Talk to seller" />
                            <button
                                className="flex items-center justify-center p-2  rounded-md
                        text-gray-400 hover:bg-gray-100 hover:text-gray-600
                        focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-sky-500"
                            >
                                <svg
                                    className="h-6 w-6 "
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-gray-900">Similar items</h2>
                    <div className="grid grid-cols-2 gap-3">
                        {[...Array(6)].map((_, i) => (
                            <div key={i}>
                                <div className="h-36 w-full mb-1 bg-slate-300" />
                                <h3 className="text-gray-700 -mb-1">Galaxy S60</h3>
                                <span className="text-sm font-bold text-gray-900">$6</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ItemDetail;
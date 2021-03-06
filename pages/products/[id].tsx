import { GetServerSideProps, GetStaticPaths, NextPage } from "next";
import Button from "@components/button";
import Layout from "@components/layout";
import { useRouter } from "next/router";
import useSWR, { useSWRConfig } from "swr";
import Link from "next/link";
import { Product, User } from "@prisma/client";
import useMutation from "@libs/client/useMutation";
import { cls } from "@libs/client/utils";
import { useEffect } from "react";
import Image from "next/image";
import client from "@libs/server/client";

interface ProductWithUser extends Product {
    user: User;
}

interface ItemDetailResponse {
    ok: boolean;
    product: ProductWithUser;
    relatedProducts: Product[];
    isLiked: boolean;
    error: string;
}

const ItemDetail: NextPage<ItemDetailResponse> = ({ product, relatedProducts, isLiked }) => {
    const router = useRouter();
    const { mutate } = useSWRConfig();
    const { data: productData, mutate: boundMutate } = useSWR<ItemDetailResponse>(router.query.id ? `/api/products/${router.query.id}` : null);
    const [toggleFav, { data: favData, loading: favLoading }] = useMutation(`/api/products/${router.query.id}/fav`);
    const onFavClick = () => {
        if (!productData) return;
        boundMutate((prev) => prev && { ...productData, isLiked: !productData?.isLiked }, false);
        //mutate("/api/users/me", (prev: any) => ({ ok: false }), false);

        if (!favLoading) toggleFav({});
    };

    useEffect(() => {
        if (productData && !productData.ok) {
            router.push("/");
        }
        if (favData && !favData.ok) {
            console.log(favData.error);
        }
    }, [productData, favData, router]);
    if (router.isFallback) {
        return (
            <Layout seoTitle="plz Wait a minute" title="plz Wait a minute">
            </Layout>
        );
    }
    return (
        <Layout canGoBack seoTitle="Product Detail">
            <div className="px-4 py-2">
                <div className="mb-2">
                    {product.image ?
                        <div className="relative pb-96">
                            <Image
                                src={`https://imagedelivery.net/jjkHUVzNHzk2FtCE-0VTSA/${product?.image}/public`}
                                className="bg-slate-500 object-center"
                                layout="fill"
                                quality={100}
                                alt="product image"
                                blurDataURL="https://i.ibb.co/ByhpsFY/blur.png"
                            //objectFit="cover"
                            />
                        </div>
                        :
                        <div className="h-96 bg-slate-500" />
                    }
                    <div className="flex items-center border-b border-t cursor-pointer space-x-3 py-4">
                        {product.user.avatar ?
                            <Image
                                src={`https://imagedelivery.net/jjkHUVzNHzk2FtCE-0VTSA/${product?.user?.avatar}/avatar`}
                                className="h-12 w-12 rounded-full bg-slate-400"
                                width={48}
                                height={48}
                                blurDataURL="https://i.ibb.co/ByhpsFY/blur.png"
                                alt="avatar image"
                            />
                            :
                            <div className="h-12 w-12 rounded-full bg-slate-400" />
                        }
                        <div>
                            <p className="text-md font-bold text-gray-800">{product?.user?.name}</p>
                            <Link href={`/users/profiles/${product?.user?.name}`}>
                                <a className="text-xs font-medium text-gray-500">View profile &rarr;</a>
                            </Link>
                        </div>
                    </div>
                    <div className="mt-3 pb-4 border-b">
                        <h1 className="text-3xl font-bold text-gray-800">{product?.name}</h1>
                        <span className="block text-2xl text-gray-800">${product?.price}</span>
                        <p className="text-base my-4 text-gray-700">
                            {product?.description}
                        </p>
                        <div className="flex items-center justify-between space-x-3">
                            <Button large text="Talk to seller" />
                            <button
                                onClick={onFavClick}
                                className={cls(
                                    "flex items-center justify-center p-2  rounded-md focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-sky-500",
                                    isLiked ? "text-red-400 hover:bg-red-200 hover:text-red-600" : "text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                                )}
                            >
                                {isLiked ?
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    :
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
                                }
                            </button>
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-gray-900">Similar items</h2>
                    <div className="grid grid-cols-2 gap-3">
                        {relatedProducts?.map((product) => (
                            <Link href={`/products/${product.id}`} key={product.id} passHref>
                                <div key={product.id} className="cursor-pointer">
                                    {product.image.length > 0
                                        ?
                                        <Image
                                            src={`https://imagedelivery.net/jjkHUVzNHzk2FtCE-0VTSA/${product.image}/public`}
                                            className="h-36 w-full mb-1 bg-slate-300"
                                            width={234}
                                            height={144}
                                            quality={100}
                                            alt="similar items"
                                        />
                                        :
                                        <div className="h-36 w-full mb-1 bg-slate-300" />
                                    }
                                    <h3 className="text-gray-700 -mb-1">{product.name}</h3>
                                    <span className="text-sm font-bold text-gray-900">${product.price}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: [],
        fallback: "blocking",
        //fallback: true,
    }
}

export const getStaticProps: GetServerSideProps = async (ctx) => {
    if (!ctx?.params?.id) {
        return {
            props: {},
        }
    }
    const product = await client.product.findUnique({
        where: {
            id: +ctx.params.id,
        },
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                    avatar: true,
                },
            },
        },
    });

    if (!product) return { props: {} };

    const terms = product?.name.split(" ").map((word) => ({
        name: {
            contains: word,
        },
    }));
    const relatedProducts = await client.product.findMany({
        where: {
            OR: terms,
            AND: {
                id: {
                    not: +ctx.params.id,
                },
            },
        },
        orderBy: {
            createdAt: "desc",
        },
        take: 4,
    });
    const isLiked = false;
    //await new Promise((resolve) => setTimeout(resolve, 5000));
    return {
        props: {
            product: JSON.parse(JSON.stringify(product)),
            relatedProducts: JSON.parse(JSON.stringify(relatedProducts)),
            isLiked,
        }
    };
}

export default ItemDetail;
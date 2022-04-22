import Image from "next/image";
import Link from "next/link";

interface ItemProps {
    title: string;
    id: number;
    price: number;
    comments: number;
    hearts: number;
    productImage: String;
}

export default function Item({
    title,
    id,
    price,
    comments,
    hearts,
    productImage,
}: ItemProps) {
    return (
        <Link href={`/products/${id}`}>
            <a className="flex justify-between cursor-pointer space-x-3 py-2 px-4">
                <div className="flex space-x-4">
                    {productImage.length > 0 ?
                        <div className="w-20 h-20 relative rounded-md">
                            <Image
                                src={`https://imagedelivery.net/jjkHUVzNHzk2FtCE-0VTSA/${productImage}/public`}
                                layout="fill"
                                objectFit="cover"
                                alt="products"
                            />
                        </div>
                        :
                        <div className="w-20 h-20 bg-slate-500 rounded-md" />
                    }
                    <div className="flex flex-col pt-2">
                        <h3 className="text-md font-semibold text-gray-900">{title}</h3>
                        <span className="text-sm font-semibold text-gray-900 mt-1">${price}</span>
                    </div>
                </div>
                <div className="flex items-end justify-end space-x-2">
                    <div className="flex items-center space-x-0.5 text-sm text-gray-600">
                        {hearts > 0 ?
                            <svg
                                className="h-5 w-5 text-red-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor">
                                <path
                                    fillRule="evenodd"
                                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 
                                0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            :
                            <svg
                                className="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 
                                    4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                        }
                        <span>{hearts}</span>
                    </div>
                    <div className="flex items-center space-x-0.5 text-gray-600 text-sm">
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
                            ></path>
                        </svg>
                        <span>{comments}</span>
                    </div>
                </div>
            </a>
        </Link>
    )
}
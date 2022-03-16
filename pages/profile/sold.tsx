import { NextPage } from "next";
import Layout from "../../components/layout";

const Sold: NextPage = () => {
    return (
        <Layout canGoBack>
            <div className='flex flex-col space-y-5 px-4'>
                {[...Array(20)].map((val, i) => (
                    <div key={i} className="flex border-b pb-4 cursor-pointer justify-between">
                        <div className='flex space-x-4'>
                            <div className='w-20 h-20 bg-gray-600 rounded-lg' />
                            <div className='flex flex-col pt-1'>
                                <h3 className='text-sm font-bold'>New iPhone 14</h3>
                                <span className='text-xs text-gray-600'>Black</span>
                                <span className='text-md font-bold mt-1'>$95</span>
                            </div>
                        </div>
                        <div className='flex items-end justify-end space-x-2'>
                            <div className='flex items-center text-sm space-x-1'>
                                <svg
                                    className="w-4 h-4 text-red-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    ></path>
                                </svg>
                                <span>1</span>
                            </div>
                            <div className='flex items-center text-sm space-x-1'>
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
                                <span>1</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
}

export default Sold;
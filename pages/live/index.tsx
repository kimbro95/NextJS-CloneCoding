import { NextPage } from "next";
import Layout from "../../components/layout";

const Live: NextPage = () => {
    return (
        <Layout title='Live' hasTabBar>
            <div className="py-0 space-y-4 divide-y-2">
                {[...Array(3)].map((val, i) => (
                    <div key={i} className="pt-2 px-4">
                        <div className="w-full bg-slate-400 rounded-md shadow-md aspect-video" />
                        <h3 className="mt-2 font-bold text-gray-700 text-lg">Live Streams...</h3>
                    </div>
                ))}
                <button className='fixed bottom-24 right-3 rounded-full shadow-lg p-3 cursor-pointer transition-colors
        hover:bg-orange-600 bg-orange-500 text-white border-transparent'>
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
                </button>
            </div>
        </Layout>
    )
}

export default Live;
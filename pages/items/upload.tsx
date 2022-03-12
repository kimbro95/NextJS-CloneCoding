import { NextPage } from "next";

const Upload: NextPage = () => {
    return (
    <div className="px-4 py-16">
        <div>
            <div>
                <label 
                    className="w-full flex items-center justify-center cursor-pointer
                    border-2 border-dashed h-52 rounded-2xl 
                    border-gray-300 text-gray-900 
                    hover:border-orange-500 hover:text-orange-500"
                >
                    <svg
                        className="h-12 w-12"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                    >
                        <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                    </svg>
                    <input className="hidden" type="file" />
                </label>
            </div>
        </div>
        <div className="my-4 space-y-1">
            <label htmlFor="price" className="text-sm font-bold text-gray-700 block">
                Price
            </label>
            <div className="rounded-md shadow-sm relative flex items-center">
                <div className="flex items-center justify-center absolute left-0 pl-3 pointer-events-none">
                    <span className="text-gray-500 text-sm">$</span>
                </div>
                    <input 
                        id="price"
                        className="pl-7 appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 
                        focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                        type="text"
                        placeholder="0.00"
                    />
                <div className="absolute right-0 pr-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">USD</span>
                </div>
            </div>
        </div>
        <div>
            <label className="text-sm font-bold text-gray-700 block">Description</label>
            <textarea
                className="mt-1 w-full shadow-sm rounded-md border-gray-300
                focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                rows={6}
            />
        </div>
        <button
            className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 mt-1 w-full
            border border-transparent rounded-md shadow-sm text-sm font-medium 
            focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none"
        >
        Upload product
        </button>
    </div>
    );
};

export default Upload;
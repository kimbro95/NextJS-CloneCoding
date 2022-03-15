import { NextPage } from "next";

const LiveDetail:NextPage = () => {
    return(
    <div className="py-10 px-4 space-y-2 ">
        <div className="w-full bg-slate-400 rounded-md shadow-md aspect-video"/>
        <h3 className="mt-2 font-bold text-gray-700 text-xl">Live Streams...</h3>
        
        <div className="py-10 pb-16 h-[55vh] px-2 space-y-4 overflow-y-scroll">
            <div className="flex items-start space-x-2">
                <div className="w-8 h-8 rounded-full bg-slate-400" />
                <div className="w-1/2 text-sm text-gray-700 p-2 border rounded-md border-gray-300">
                    <p>Hi how much are you selling them for?</p>
                </div>
            </div>
            <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
                <div className="w-8 h-8 rounded-full bg-slate-400" />
                <div className="w-1/2 text-sm text-gray-700 p-2 border rounded-md border-gray-300">
                    <p>I want ￦20,000</p>
                </div>
            </div>
            <div className="flex items-start space-x-2">
                <div className="w-8 h-8 rounded-full bg-slate-400" />
                <div className="w-1/2 text-sm text-gray-700 p-2 border rounded-md border-gray-300">
                    <p>Hi how much are you selling them for?</p>
                </div>
            </div>
            <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
                <div className="w-8 h-8 rounded-full bg-slate-400" />
                <div className="w-1/2 text-sm text-gray-700 p-2 border rounded-md border-gray-300">
                    <p>I want ￦20,000</p>
                </div>
            </div>
            <div className="flex items-start space-x-2">
                <div className="w-8 h-8 rounded-full bg-slate-400" />
                <div className="w-1/2 text-sm text-gray-700 p-2 border rounded-md border-gray-300">
                    <p>Hi how much are you selling them for?</p>
                </div>
            </div>
            <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
                <div className="w-8 h-8 rounded-full bg-slate-400" />
                <div className="w-1/2 text-sm text-gray-700 p-2 border rounded-md border-gray-300">
                    <p>I want ￦20,000</p>
                </div>
            </div>
            <div className="flex items-start space-x-2">
                <div className="w-8 h-8 rounded-full bg-slate-400" />
                <div className="w-1/2 text-sm text-gray-700 p-2 border rounded-md border-gray-300">
                    <p>Hi how much are you selling them for?</p>
                </div>
            </div>
            <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
                <div className="w-8 h-8 rounded-full bg-slate-400" />
                <div className="w-1/2 text-sm text-gray-700 p-2 border rounded-md border-gray-300">
                    <p>I want ￦20,000</p>
                </div>
            </div>
            <div className="flex items-start space-x-2">
                <div className="w-8 h-8 rounded-full bg-slate-400" />
                <div className="w-1/2 text-sm text-gray-700 p-2 border rounded-md border-gray-300">
                    <p>Hi how much are you selling them for?</p>
                </div>
            </div>
            <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
                <div className="w-8 h-8 rounded-full bg-slate-400" />
                <div className="w-1/2 text-sm text-gray-700 p-2 border rounded-md border-gray-300">
                    <p>I want ￦20,000</p>
                </div>
            </div>
        </div>
        <div className="fixed w-11/12 mx-auto max-w-md bottom-3 inset-x-0">
            <div className="flex items-center relative">
                <input
                    type="text"
                    className="shadow-sm rounded-full w-full border-gray-300 pr-12
                    focus:ring-orange-500 focus:outline-none focus:border-orange-500"
                />
                <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
                    <button
                        className="flex items-center bg-orange-500 rounded-full px-3 text-white font-bold
                        focus:ring-2 focus:ring-offset-2 focus:ring-orange-500
                        hover:bg-orange-600 cursor-pointer"
                    >&rarr;
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default LiveDetail;
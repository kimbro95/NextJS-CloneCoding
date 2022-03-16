import { NextPage } from "next";
import Layout from "../../components/layout";

const Create: NextPage = () => {
    return (
        <Layout canGoBack>
            <div className="px-4 space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700" >
                        Name
                    </label>
                    <div className="rounded-md relative flex items-center shadow-sm">
                        <input
                            id="name"
                            type="email"
                            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                            required
                        />
                    </div>
                </div>
                <div>
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
                    Go Live !!!
                </button>
            </div>
        </Layout>
    )
}

export default Create;
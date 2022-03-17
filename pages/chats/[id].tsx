import { NextPage } from "next";
import Layout from "../../components/layout";
import Message from "../../components/message";

const ChatDetail: NextPage = () => {
    return (
        <Layout canGoBack title="Steve">
            <div className="py-4 pb-16 px-4 space-y-4">
                <Message message="Hello World" />
                <Message message="dlroW olleH" reversed />
                <Message message="This is NextJS" />
                <form className="fixed inset-x-0 bg-white bottom-0 py-3 px-2">
                    <div className="flex relative items-center max-w-md w-full mx-auto">
                        <input
                            type="text"
                            className="shadow-sm rounded-full w-full border-gray-300 pr-12
                            focus:ring-orange-500 focus:outline-none focus:border-orange-500
                            "
                        />
                        <div className="absolute flex inset-y-0 py-1.5 pr-1.5 right-0">
                            <button
                                className="flex items-center bg-orange-500 rounded-full px-3 text-sm text-white
                                hover:bg-orange-600 focus:ring-offset-2 focus:ring-orange-500
                                "
                            >
                                &rarr;
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    );
}

export default ChatDetail;
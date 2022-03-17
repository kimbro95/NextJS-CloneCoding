import { NextPage } from "next";
import Layout from "../../components/layout";
import Message from "../../components/message";

const LiveDetail: NextPage = () => {
    return (
        <Layout canGoBack title="Live">
            <div className="px-4 py-2 space-y-2 ">
                <div className="w-full bg-slate-400 rounded-md shadow-md aspect-video" />
                <h3 className="mt-2 font-bold text-gray-700 text-3xl">Live Streams...</h3>
                <div className="mt-5">
                    <h1 className="text-xl font-bold text-gray-700">Galaxy S50</h1>
                    <span className="text-2xl block text-gray-700">$140</span>
                    <p className=" my-2 text-gray-700">
                        My money&apos;s in that office, right? If she start giving me some
                        bullshit about it ain&apos;t there, and we got to go someplace else
                        and get it, I&apos;m gonna shoot you in the head then and there. Then
                        I&apos;m gonna shoot that bitch in the kneecaps, find out where my
                        goddamn money is. She gonna tell me too. Hey, look at me when I&apos;m
                        talking to you, motherfucker. You listen: we go in there, and that
                        ni**a Winston or anybody else is in there, you the first motherfucker
                        to get shot. You understand?
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold text-gray-900">Live Chat</h2>
                    <div className="py-10 pb-16 h-[55vh] px-1 space-y-4 overflow-y-scroll">
                        <Message message="Hello World !!!" />
                        <Message message="This is Carrot Market" />
                        <Message message="WoW" reversed />
                        <Message message="LOL!!!" />
                        <Message message="Hello World !!!" />
                        <Message message="This is Carrot Market" />
                        <Message message="WoW" reversed />
                        <Message message="LOL!!!" />
                        <Message message="Hello World !!!" />
                        <Message message="This is Carrot Market" />
                        <Message message="WoW" reversed />
                        <Message message="LOL!!!" />
                    </div>
                </div>
                <div className="fixed px-2 py-2 bg-white bottom-0 inset-x-0">
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
        </Layout>
    )
}

export default LiveDetail;
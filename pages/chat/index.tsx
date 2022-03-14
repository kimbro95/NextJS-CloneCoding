import { NextPage } from "next";

const Chats: NextPage = () => {
    return (
    <div className="py-10 divide-y-[1px]">
        {[...Array(5)].map((val, i) => (
        <div key={i} className="flex items-center space-x-3 py-4 px-4">
            <div className="h-12 w-12 rounded-full bg-slate-400" />
            <div>
                <p className="font-bold text-gray-800">Steve Jebs</p>
                <p className="text-sm cursor-pointer text-gray-500">Hello !!!</p>
            </div>
        </div>
        ))}
    </div>
    );
}

export default Chats;
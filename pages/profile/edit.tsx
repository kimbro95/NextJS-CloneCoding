import { NextPage } from "next";

const EditProfile:NextPage = () => {
    return (
    <div className="px-4 py-10 space-y-3">
        <div className="flex items-center space-x-3">
        <div className="h-12 w-12 rounded-full bg-slate-500"/>
            <label
            htmlFor="picture" 
            className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md shadow-md text-sm font-medium
            focus:ring-2 focus:ring-offset-3 focus:ring-orange-500 text-gray-700"
            >
                Change Photo
                <input id="picture" type="file" className="hidden" accept="image/*" />
            </label>
        </div>
        <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Adress
            </label>
            <input 
                id="email"
                type="email" 
                className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 
                focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter email..."
                required 
            /> 
        </div>
        <div className="space-y-1">
            <label htmlFor="Phone" className="text-sm font-medium text-gray-700">
                Phone Number
            </label>
            <div className="flex rounded-sm shadow-sm">
                <span className="flex items-center justify-center rounded-l-md select-none
                px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500"
                >
                +82
                </span>
                <input
                    id="input"
                    className="appearance-none w-full px-3 py-2 border border-gray-300 
                    rounded-md rounded-l-none shadow-sm placeholder-gray-400 
                    focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                    type="number" 
                    required 
                />
            </div>
        </div>
        <button 
            className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 mt-2 w-full
            border border-transparent rounded-md shadow-sm text-sm font-medium 
            focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none"
        >
        Update Profile
        </button>
    </div>
    );
}

export default EditProfile;
import { NextPage } from "next";
import Button from "@components/button";
import Input from "@components/input";
import Layout from "@components/layout";

const EditProfile: NextPage = () => {
    return (
        <Layout canGoBack title="Edit Profile">
            <form className="px-4 py-3 space-y-2">
                <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 rounded-full bg-slate-500" />
                    <label
                        htmlFor="picture"
                        className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md shadow-md text-sm font-medium
            focus:ring-2 focus:ring-offset-3 focus:ring-orange-500 text-gray-700"
                    >
                        Change Photo
                        <input id="picture" type="file" className="hidden" accept="image/*" />
                    </label>
                </div>
                <Input
                    label="Email adress"
                    name="email"
                    kind="text"
                    type="email"
                    required
                />
                <Input
                    label="Phone number"
                    name="phone"
                    kind="phone"
                    type="numver"
                    required
                />
                <Button text="Update Profile" />
            </form>
        </Layout>
    );
}

export default EditProfile;
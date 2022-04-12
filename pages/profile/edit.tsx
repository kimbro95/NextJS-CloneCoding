import { NextPage } from "next";
import Button from "@components/button";
import Input from "@components/input";
import Layout from "@components/layout";
import useUser from "@libs/client/useUser";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

interface EditProfileForm {
    email?: string;
    phone?: string;
    formErrors?: string;
}

const EditProfile: NextPage = () => {
    const { user } = useUser();
    const { register, setValue, handleSubmit, setError, formState: { errors } } = useForm<EditProfileForm>();

    useEffect(() => {
        if (user?.email) setValue("email", user.email);
        if (user?.phone) setValue("phone", user.phone);
    }, [user, setValue]);

    const onValid = ({ email, phone }: EditProfileForm) => {
        if (email === '' && phone === '') {
            setError("formErrors", { message: "Email or Phone number are required." });
        }
    };

    return (
        <Layout canGoBack title="Edit Profile">
            <form onSubmit={handleSubmit(onValid)} className="px-4 py-3 space-y-2">
                <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 rounded-full bg-slate-500" />
                    <label
                        htmlFor="picture"
                        className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md 
                        shadow-md text-sm font-medium
                        focus:ring-2 focus:ring-offset-3 focus:ring-orange-500 text-gray-700"
                    >
                        Change Photo
                        <input id="picture" type="file" className="hidden" accept="image/*" />
                    </label>
                </div>
                <Input
                    register={register("email")}
                    label="Email adress"
                    name="email"
                    kind="text"
                    type="email"
                    required={false}
                />
                <Input
                    register={register("phone")}
                    label="Phone number"
                    name="phone"
                    kind="phone"
                    type="numver"
                    required={false}
                />
                {errors.formErrors
                    ? <span className="my-1 text-red-600 font-semibold block text-center">{errors.formErrors.message}</span>
                    : null
                }
                <Button text="Update Profile" />
            </form>
        </Layout>
    );
}

export default EditProfile;
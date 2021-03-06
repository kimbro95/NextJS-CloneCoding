import { NextPage } from "next";
import Button from "@components/button";
import Input from "@components/input";
import Layout from "@components/layout";
import useUser from "@libs/client/useUser";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import useMutation from "@libs/client/useMutation";
import Image from "next/image";

interface EditProfileForm {
    email?: string;
    phone?: string;
    name?: string;
    avatar?: FileList;
    formErrors?: string;
}

interface EditProfileResponse {
    ok: boolean;
    error?: string;
}

const EditProfile: NextPage = () => {
    const { user } = useUser();
    const { register, setValue, handleSubmit, setError, formState: { errors }, watch } = useForm<EditProfileForm>();
    const [editProfile, { data, loading }] = useMutation<EditProfileResponse>(`/api/users/me`);
    const onValid = async ({ email, phone, name, avatar }: EditProfileForm) => {
        if (loading) return
        if (email === '' && phone === '' && name === '') {
            return setError("formErrors", { message: "Email or Phone number are required." });
        }
        if (avatar && avatar.length > 0 && user) {
            // ask for Cloudflare URL
            const { uploadURL } = await (await fetch(`/api/files`)).json();

            // Upload file to Cloudflare URL
            const form = new FormData();
            form.append("file", avatar[0], user?.id + "");
            const { result: { id } } = await (await fetch(uploadURL, {
                method: "POST",
                body: form,
            })).json();

            editProfile({
                email,
                phone,
                name,
                avatarId: id
            });
        } else {
            editProfile({
                email,
                phone,
                name
            });
        }
    };

    useEffect(() => {
        if (user?.name) setValue("name", user.name);
        if (user?.email) setValue("email", user.email);
        if (user?.phone) setValue("phone", user.phone);
        if (user?.avatar) setAvatarPreview(`https://imagedelivery.net/jjkHUVzNHzk2FtCE-0VTSA/${user.avatar}/avatar`);
    }, [user, setValue]);

    useEffect(() => {
        if (data && !data.ok && data.error) {
            setError("formErrors", { message: data.error });
        }
    }, [data, setError]);

    // Preview Profile Image
    const [avatarPreview, setAvatarPreview] = useState("");
    const avatar = watch("avatar");
    useEffect(() => {
        if (avatar && avatar.length > 0) {
            const file = avatar[0];
            setAvatarPreview(URL.createObjectURL(file));
        }
    }, [avatar]);
    return (
        <Layout canGoBack title="Edit Profile" seoTitle="Edit Profile">
            <form onSubmit={handleSubmit(onValid)} className="px-4 py-3 space-y-2">
                <div className="flex items-center space-x-3">
                    {avatarPreview ?
                        <Image
                            src={avatarPreview}
                            className="rounded-full"
                            width={56}
                            height={56}
                            alt="edit avatar image"
                        />
                        :
                        <div
                            className="h-14 w-14 rounded-full bg-slate-500"
                        />
                    }
                    <label
                        htmlFor="picture"
                        className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md 
                        shadow-md text-sm font-medium
                        focus:ring-2 focus:ring-offset-3 focus:ring-orange-500 text-gray-700"
                    >

                        Change Photo
                        <input
                            {...register("avatar")}
                            id="picture"
                            type="file"
                            className="hidden"
                            accept="image/*"
                        />
                    </label>
                </div>
                <Input
                    register={register("name")}
                    label="Name"
                    name="name"
                    kind="text"
                    type="text"
                    required={false}
                />
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
                <Button text={loading ? "Loading..." : "Update Profile"} />
            </form>
        </Layout>
    );
}

export default EditProfile;
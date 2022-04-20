import { NextPage } from "next";
import Button from "@components/button";
import Input from "@components/input";
import Layout from "@components/layout";
import TextArea from "@components/textarea";
import { useForm } from "react-hook-form";
import useMutation from "@libs/client/useMutation";
import { useEffect, useState } from "react";
import { Product } from "@prisma/client";
import { useRouter } from "next/router";

interface UploadProductForm {
    name: string;
    price: number;
    description: string;
    photo: FileList;
}

interface UploadProductMutation {
    ok: boolean;
    product: Product;
}

const Upload: NextPage = () => {
    const router = useRouter();
    const { register, handleSubmit, watch } = useForm<UploadProductForm>();
    const [uploadProduct, { loading, data }] = useMutation<UploadProductMutation>("/api/products");
    const onValid = async ({ name, price, description, photo }: UploadProductForm) => {
        if (loading) return;
        if (photo && photo.length > 0) {
            // ask for Cloudflare URL
            const { uploadURL } = await (await fetch(`/api/files`)).json();

            // Upload file to Cloudflare URL
            const form = new FormData();
            form.append("file", photo[0], name);
            const { result: { id } } = await (await fetch(uploadURL, {
                method: "POST",
                body: form,
            })).json();
            uploadProduct({
                name,
                price,
                description,
                photoId: id,
            });
        } else {
            uploadProduct({
                name,
                price,
                description,
            });
        }
    };
    useEffect(() => {
        if (data?.ok) router.push(`/products/${data.product.id}`);
    }, [data, router]);

    const [photoPreview, setPhotoPreview] = useState("");
    const photo = watch("photo");
    useEffect(() => {
        if (photo && photo.length > 0) {
            const file = photo[0];
            setPhotoPreview(URL.createObjectURL(file));
        }
    }, [photo]);
    return (
        <Layout canGoBack title="Upload">
            <form className="px-4 py-2 space-y-2 items-center" onSubmit={handleSubmit(onValid)}>
                {photoPreview
                    ?
                    <img
                        src={photoPreview}
                        className="w-full text-gray-600 aspect-video h-52 rounded-2xl"
                    />
                    : <label
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
                        <input
                            {...register("photo")}
                            type="file"
                            className="hidden"
                            accept="image/*"
                        />
                    </label>
                }
                <Input
                    register={register("name", { required: true })}
                    label="Name"
                    name="name"
                    kind="text"
                    type="text"
                    required
                />
                <Input
                    register={register("price", { required: true })}
                    label="Price"
                    name="price"
                    kind="price"
                    type="text"
                    required
                />
                <TextArea
                    register={register("description", { required: true })}
                    name="Descript"
                    label="Descript"
                    required
                />
                <Button text={loading ? "Loading..." : "Upload item"} />
            </form>
        </Layout>
    );
};

export default Upload;
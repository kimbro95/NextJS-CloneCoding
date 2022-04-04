import { NextPage } from "next";
import Button from "@components/button";
import Input from "@components/input";
import Layout from "@components/layout";
import TextArea from "@components/textarea";
import { useForm } from "react-hook-form";
import useMutation from "@libs/client/useMutation";
import { useEffect } from "react";
import { Product } from "@prisma/client";
import { useRouter } from "next/router";

interface UploadProductForm {
    name: string;
    price: number;
    description: string;
}

interface UploadProductMutation {
    ok: boolean;
    product: Product;
}

const Upload: NextPage = () => {
    const router = useRouter();
    const { register, handleSubmit } = useForm<UploadProductForm>();
    const [uploadProduct, { loading, data }] = useMutation<UploadProductMutation>("/api/products");
    const onValid = (data: UploadProductForm) => {
        if (loading) return;
        uploadProduct(data);
    };
    useEffect(() => {
        if (data?.ok) router.push(`/products/${data.product.id}`);
    }, [data, router]);
    return (
        <Layout canGoBack title="Upload">
            <form className="px-4 py-2 space-y-2 items-center" onSubmit={handleSubmit(onValid)}>
                <label
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
                    <input className="hidden" type="file" />
                </label>
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
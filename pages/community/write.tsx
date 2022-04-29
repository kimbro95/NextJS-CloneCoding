import { NextPage } from "next";
import Button from "@components/button";
import Layout from "@components/layout";
import TextArea from "@components/textarea";
import { useForm } from "react-hook-form";
import useMutation from "@libs/client/useMutation";
import { Post } from "@prisma/client";
import { useEffect } from "react";
import { useRouter } from "next/router";
import useCoords from "@libs/client/useCoords";

interface WriteForm {
    question: string;
}

interface WriteResponse {
    ok: boolean;
    post: Post;
}

const Write: NextPage = () => {
    const router = useRouter();
    const { latitude, longitude } = useCoords();
    const { register, handleSubmit } = useForm<WriteForm>();
    const [post, { loading, data }] = useMutation<WriteResponse>("/api/posts");
    const onValid = (data: WriteForm) => {
        if (loading) return;
        post({ ...data, latitude, longitude });
    }
    useEffect(() => {
        if (data && data.ok) {
            router.push(`/community/${data.post.id}`);
        }
    }, [data, router]);

    return (
        <Layout canGoBack title="Write Post" seoTitle="Community Write">
            <form onSubmit={handleSubmit(onValid)} className="px-4 py-2 space-y-2">
                <TextArea
                    register={register("question", {
                        required: true,
                        minLength: 5
                    })}
                    required
                    placeholder="Ask a question!"
                />
                <Button text={loading ? "Loading..." : "Submit"} />
            </form>
        </Layout>
    );
}

export default Write;
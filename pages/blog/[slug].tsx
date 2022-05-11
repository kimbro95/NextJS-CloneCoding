import Layout from "@components/layout";
import { readdirSync } from "fs";
import matter from "gray-matter";
import { NextPage, GetServerSideProps, GetStaticPaths } from "next";
import remarkHtml from "remark-html";
import remarkParse from "remark-parse";
import { validateRequest } from "twilio/lib/webhooks/webhooks";
import { unified } from "unified";

const Post: NextPage<{ post: string, data: any }> = ({ post, data }) => {
    return (
        <Layout title={data.title} seoTitle={data.title}>
            <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post }} />
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = ({ }) => {
    // const files = readdirSync("./posts").map((file) => {
    //     const [name, _] = file.split(".");
    //     return { params: { slug: name } };
    // });
    return {
        paths: [],
        fallback: "blocking",
    };
}

export const getStaticProps: GetServerSideProps = async (ctx) => {
    const { content, data } = matter.read(`./posts/${ctx.params?.slug}.md`);
    const { value } = await unified()
        .use(remarkParse)
        .use(remarkHtml)
        .process(content);
    return {
        props: {
            data,
            post: value,
        },
    };
}

export default Post;
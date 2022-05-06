import { readdirSync } from "fs";
import matter from "gray-matter";
import { NextPage, GetServerSideProps } from "next";
import remarkHtml from "remark-html";
import remarkParse from "remark-parse";
import { validateRequest } from "twilio/lib/webhooks/webhooks";
import { unified } from "unified";

const Post: NextPage<{ post: string }> = ({ post }) => {
    return (
        <h1>{post}</h1>
    );
}

export const getStaticPaths = ({ }) => {
    const files = readdirSync("./posts").map((file) => {
        const [name, _] = file.split(".");
        return { params: { slug: name } };
    });
    return {
        paths: files,
        fallback: false,
    };
}

export const getStaticProps: GetServerSideProps = async (ctx) => {
    const { content } = matter.read(`./posts/${ctx.params?.slug}.md`);
    const { value } = await unified()
        .use(remarkParse)
        .use(remarkHtml)
        .process(content);
    return {
        props: {
            post: value,
        },
    };
}

export default Post;
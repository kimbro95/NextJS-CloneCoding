import { readdirSync } from "fs";
import { NextPage } from "next";

const Post: NextPage = () => {
    return (
        <h1>111</h1>
    );
}

export const getStaticPaths = () => {
    const files = readdirSync("./posts").map((file) => {
        const [name, _] = file.split(".");
        return { params: { slug: name } };
    });
    return {
        paths: files,
        fallback: false,
    };
}

export const getStaticProps = () => {
    return {
        props: {

        },
    };
}

export default Post;
import Layout from "@components/layout";
import matter from "gray-matter";
import { readdirSync, readFileSync } from "fs";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";

interface Post {
    title: string;
    date: string;
    slug: string;
}
const Blog: NextPage<{ posts: Post[] }> = ({ posts }) => {
    //console.log(posts);
    return (
        <Layout title="Blog" seoTitle="Blog">
            <h1 className="mb-4 font-semibold text-lg">Lastest Posts</h1>
            {posts.map((post, idx) => (
                <div key={idx} className="mb-2">
                    <Link href={`/blog/${post.slug}`}>
                        <a>
                            <span className="text-lg">{post.title}</span>
                            <div>
                                <span className="text-sm">{post.date}</span>
                            </div>
                        </a>
                    </Link>
                </div>
            ))}
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    // readdirSync(): 디렉토리(폴더)의 내용을 읽는다.
    const blogPosts = readdirSync("./posts").map((file) => {
        const content = readFileSync(`./posts/${file}`, "utf-8");   // path의 내용을 반환한다.
        const [slug, _] = file.split(".");
        return { ...matter(content).data, slug };
    });
    //console.log(blogPosts);
    return {
        props: {
            posts: blogPosts
        },
    };
}

export default Blog;
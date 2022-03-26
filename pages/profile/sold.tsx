import { NextPage } from "next";
import Item from "@components/item";
import Layout from "@components/layout";

const Sold: NextPage = () => {
    return (
        <Layout canGoBack title="판매내역">
            <div className="flex flex-col space-y-4 divide-y-[1px]">
                {[...Array(20)].map((_, i) => (
                    <Item
                        id={i}
                        key={i}
                        title="iPhone 14"
                        price={99}
                        comments={1}
                        hearts={1}
                    />
                ))}
            </div>
        </Layout>
    );
}

export default Sold;
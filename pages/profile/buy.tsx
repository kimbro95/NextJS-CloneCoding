import { NextPage } from "next";
import Layout from "@components/layout";
import ProductList from "@components/product-list";

const Buy: NextPage = () => {
    return (
        <Layout canGoBack title="구매내역" seoTitle="Buy">
            <div className="flex flex-col space-y-4 divide-y-[1px] py-1">
                <ProductList
                    kind="purchases"
                />
            </div>
        </Layout>
    );
}

export default Buy;
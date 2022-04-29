import { NextPage } from "next";
import Layout from "@components/layout";
import ProductList from "@components/product-list";

const Sold: NextPage = () => {
    return (
        <Layout canGoBack title="판매내역" seoTitle="Sold">
            <div className="flex flex-col space-y-4 divide-y-[1px] py-1">
                <ProductList
                    kind="sales"
                />
            </div>
        </Layout>
    );
}

export default Sold;
import type { GetServerSideProps, NextPage } from "next";
import FloatingButton from "@components/floating-button";
import Item from "@components/item";
import Layout from "@components/layout";
import useSWRInfinite, { unstable_serialize } from "swr/infinite";
import { Product } from "@prisma/client";
import { useInfiniteScroll } from "@libs/client/useInfiniteScroll";
import { useEffect } from "react";
import { SWRConfig } from "swr";
import client from "@libs/server/client";

export interface ProductWitCount extends Product {
  _count: {
    favs: number;
  };
}

interface ProductsResponse {
  ok: boolean;
  products: ProductWitCount[];
  pages: number;
}

const getKey = (pageIndex: number, previousPageData: ProductsResponse) => {
  if (pageIndex === 0) return `/api/products?page=1`;
  if (pageIndex + 1 > previousPageData.pages) return null;
  return `/api/products?page=${pageIndex + 1}`;
};
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  // useSWRInfinite 사용법
  // https://swr.vercel.app/ko/docs/pagination#useswrinfinite
  const { data, setSize } = useSWRInfinite<ProductsResponse>(getKey, fetcher);
  const products = data ? data.map((item) => item.products).flat() : [];
  const page = useInfiniteScroll();

  useEffect(() => {
    setSize(page);
  }, [setSize, page]);

  return (
    <Layout title="홈" hasTabBar seoTitle="Products">
      <div className="flex flex-col space-y-4 divide-y-[1px]">
        {products?.map((product) => (
          <Item
            id={product.id}
            key={product.id}
            title={product.name}
            price={product.price}
            comments={0}
            hearts={product._count?.favs || 0}
            productImage={product.image}
          />
        ))}
        <FloatingButton href="/products/upload">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

const Page: NextPage<ProductsResponse> = ({ products, pages }) => {
  // unstable_serialize 사용
  // https://github.com/vercel/swr/issues/1520#issuecomment-933247768
  return (
    <SWRConfig
      value={{
        fallback: {
          [unstable_serialize(getKey)]: [{
            ok: true,
            products,
            pages,
          },],
        },
      }}
    >
      <Home />
    </SWRConfig>
  )
};

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await client.product.findMany({
    include: {
      _count: {
        select: {
          favs: true,
        },
      },
    },
    take: 10,
    skip: 0,
  });
  if (!products) return { props: {} };

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}

export default Page;
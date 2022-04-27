import { ProductWitCount } from "pages";
import useSWR from "swr";
import Item from "./item";

interface ProductListProps {
    kind: "favs" | "sales" | "purchases";
}

interface Record {
    id: number;
    product: ProductWitCount;
}

interface SalesListResponse {
    [key: string]: Record[];
}

export default function ProductList({ kind }: ProductListProps) {
    const { data } = useSWR<SalesListResponse>(`/api/users/me/${kind}`);
    return data
        ?
        <>
            {data[kind]?.map((sale) => (
                <Item
                    key={sale.id}
                    id={sale.product.id}
                    title={sale.product.name}
                    price={sale.product.price}
                    comments={1}
                    hearts={sale.product._count.favs}
                    productImage={sale.product.image}
                />
            ))}
        </>
        : null;
}
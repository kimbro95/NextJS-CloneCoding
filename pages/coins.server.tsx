import { Suspense } from "react";

const cache: any = {};
function fetchData(url: string) {
    if (!cache[url]) {
        throw Promise.all([
            fetch(url)
                .then((res) => res.json())
                .then((json) => (cache[url] = json)),
            new Promise((resolve) =>
                setTimeout(resolve, Math.round(Math.random() * 5000))
            ),
        ]);
    }
    return cache[url];
}

function Coin({ id, name, symbol }: any) {
    const { quotes: { USD: { price } } } = fetchData(`https://api.coinpaprika.com/v1/tickers/${id}`);
    return (
        <span key={id}>
            {name} | {symbol} | ${price}
        </span>
    )
}

function List() {
    const coins = fetchData("https://api.coinpaprika.com/v1/coins");
    return (
        <div>
            <h4>Coin List</h4>
            <ul>
                {coins.slice(0, 20).map((coin: any) => (
                    <li key={coin.id}>
                        <Suspense fallback={`Loading ${coin.name}...`}>
                            <Coin {...coin} />
                        </Suspense>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function Coins() {
    return (
        <div>
            <h1>Welcome to RSC</h1>
            <Suspense fallback="Loading...">
                <List />
            </Suspense>
        </div>
    );
}

export const config = {
    runtime: "edge",
};
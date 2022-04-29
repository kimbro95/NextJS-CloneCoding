import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

class CustomDocument extends Document{
    render(): JSX.Element{
        return (
            <Html lang="ko">
                <Head>
                    <link 
                        href="https://fonts.googleapis.com/css2?family=Orelega+One&display=swap" 
                        rel="stylesheet"
                    />
                    <Script 
                        src="https://developers.kakao.com/sdk/js/kakao.js" 
                        strategy="lazyOnload"           // 다른 모든 데이터나 소스를 불러온 후에 로드
                        //strategy="beforeInteractive"  // 페이지가 interactive 되기 전에 로드
                        //strategy="afterInteractive"   // 페이지가 interactive 된 후에 로드 ( 기본값 ) 
                        //strategy="worker"             // web worker에 로드 ( 실헝용? )
                    />
                    <Script 
                        src="https://connect.facebook.net/en_US/sdk.js" 
                        // onLoad는 스크립트를 다 불러온 다음에 실행된다.
                        onLoad={() => {
                            window.fbAsyncInit = function () {
                                FB.init({
                                appId: "your-app-id",
                                autoLogAppEvents: true,
                                xfbml: true,
                                version: "v13.0",
                                });
                            };
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default CustomDocument;
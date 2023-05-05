import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import "src/styles/globals.css";
import "src/styles/circular-progress.css";

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Saurabh Singh | Longshot</title>
                <link
                    rel="icon"
                    href="https://uploads-ssl.webflow.com/62a1d5337c2a860b919132f8/62c972456d27694153c0f914_LongShot%20favicon.png"
                    type="image/x-icon"
                />
                <meta name="viewport" content="width=1280, initial-scale=1" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default App;

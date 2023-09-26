import * as React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "../src/theme";
import Home from "../src/home";
import Head from "next/head";

export default function Index() {
  const imageUrl = '/thumbnail.jpg';

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Zoo</title>
        <meta name="title" content="Zoo" />
        <meta name="description" content="A decentralized margin trading protocol that enables leverage trading for any tokens" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Zoo" />
        <meta property="og:description" content="A decentralized margin trading protocol that enables leverage trading for any tokens" />
        <meta property="og:image" content={imageUrl} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Zoo" />
        <meta property="twitter:description" content="A decentralized margin trading protocol that enables leverage trading for any tokens" />
        <meta property="twitter:image" content={imageUrl} />
      </Head>
      <Home></Home>
    </ThemeProvider>
  );
}

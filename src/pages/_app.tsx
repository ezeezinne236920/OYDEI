import clsx from "clsx";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Layout from "@/features/layout/layout";
// import Layout from "@/layout/layout";

interface Props {
  Component: React.ElementType;
  pageProps: any;
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "konna-store",
  description: "",
};

export default function App({ Component, pageProps }: Props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/zee.svg" />
      </Head>
      <Layout>
        <Component {...pageProps} />
        <style jsx global>{`
          body {
            @apply ${clsx(inter.className)};
          }
        `}</style>
      </Layout>{" "}
    </>
  );
}

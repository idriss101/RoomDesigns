import React from "react";
import Head from "next/head";
export default function Layout({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen h-screen font-spartan lg:overflow-hidden">
        {children}
      </main>
    </div>
  );
}

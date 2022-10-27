import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { ColorScheme, ColorSchemeProvider } from "@mantine/core";
import React from "react";

import { MantineProvider } from "@mantine/core";

const pathNames = ["/application-ui", "/page-sections", "/blog-ui"];

const links = ["Application UI", "Page Sections", "Blog UI"];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <nav className="flex">
          {pathNames.map((path, i) => (
            <li key={path} className={path === router.asPath ? "active" : ""}>
              <Link href={path}>{links[i]}</Link>
            </li>
          ))}
        </nav>
        <div className="flex">
          <div>111</div>
          <div>222</div>
          <div>333</div>
        </div>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}

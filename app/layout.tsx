import React, { ReactNode } from "react";

import "../styles/index.css";
import "../styles/font.css";
import "../styles/tailwind.css";
import AosInitializer from "./aos";

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="A description of your page" />
          <meta property="og:title" content="Your Page Title" />
          <meta property="og:description" content="A description of your page" />
          <meta property="og:image" content="URL-to-image" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicon.ico" />
          <title>Medinize</title>
        </head>
        <body>
          <AosInitializer />
          {children}
        </body>
      </html>

    </>
  );
}

export default RootLayout;

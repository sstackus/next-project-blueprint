import getConfig from 'next/config';
import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

const { publicRuntimeConfig } = getConfig();

export default class _Document extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1, width=device-width, user-scalable=no, shrink-to-fit=no" />
          <meta name="theme-color" content={publicRuntimeConfig.THEME_COLOR} />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

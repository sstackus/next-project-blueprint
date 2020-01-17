import React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

import './_app.scss';

export default function _app({ Component, pageProps }) {
  return (
    <>
      <Header className="flex-0" />
      <div className="flex-auto">
        <Component {...pageProps} />
      </div>
      <Footer className="flex-0" />
    </>
  );
}

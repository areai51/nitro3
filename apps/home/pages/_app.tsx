import React from 'react';
import { AppProps } from 'next/app';

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
};

export default CustomApp;

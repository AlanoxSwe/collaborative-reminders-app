// Dependencies
import React from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { SWRConfig } from "swr";
import Axios from 'axios';
// Context
import { ConnectionProvider } from '@/context/Connection';
// Styles
import '@/styles/base.scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {

  return (
    <ConnectionProvider value={true}>
      <SWRConfig
        value={{
          shouldRetryOnError: false,
          fetcher: (resource, init) => Axios(resource, init).then((res) => res.data),
          revalidateOnFocus: true,
          refreshInterval: 100,
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </ConnectionProvider>
  );
}

export default MyApp;
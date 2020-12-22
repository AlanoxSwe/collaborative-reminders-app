// Dependencies
import React from 'react';
import { SWRConfig } from "swr";
import Axios from 'axios';
//Styles
import '@/styles/base.scss';

import { ConnectionProvider } from '@/context/Connection';



function MyApp({ Component, pageProps }) {

  const [connectionExists, setConnectionExists] = React.useState(true);

  function toggleConnection() {
    setConnectionExists(connectionExists => !connectionExists);
  }

  return (
    <ConnectionProvider value={{connectionExists, toggleConnection}}>
      <SWRConfig
        value={{
          revalidateOnFocus: false,
          shouldRetryOnError: false,
          fetcher: (...args) => Axios(...args).then((res) => res.data),
          revalidateOnFocus: true,
          refreshInterval: 500,
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </ConnectionProvider>
  );
}

export default MyApp;
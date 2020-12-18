// Dependencies
import { SWRConfig } from "swr";
import Axios from 'axios';
//Styles
import '@/styles/base.scss';

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        shouldRetryOnError: false,
        fetcher: (...args) => Axios(...args).then((res) => res.data),
        revalidateOnFocus: true,
        refreshInterval: 700,
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
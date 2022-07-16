import type { AppProps } from "next/app";
import { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import GlobalStyle from "../src/styles/GlobalStyle";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;

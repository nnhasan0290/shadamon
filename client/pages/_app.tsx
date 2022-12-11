import "../styles/globals.css";
import type { AppProps } from "next/app";
import ContextProvider from "../context/ContextProvider";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import store from "../redux/store"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <Provider store={store}>
    <SessionProvider session={session}>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </SessionProvider>

    </Provider>
  );
}

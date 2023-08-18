import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import type { NextPage } from "next";
import type { AppType, AppProps } from "next/app";
import "~/styles/globals.css";
import { ReactElement, ReactNode } from "react";
// import ClientAuthProvider from "~/providers/client-auth-provider";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)


  return (
    <SessionProvider session={session}>
      {/* <ClientAuthProvider> */}
        {getLayout(<Component {...pageProps} />)}
      {/* </ClientAuthProvider> */}
    </SessionProvider>
  );
};

export default App;

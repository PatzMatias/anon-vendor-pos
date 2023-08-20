import { SessionProvider } from "next-auth/react";
import Fonts from "~/components/ui/Typography/fonts";
import type { Session } from "next-auth";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import "~/styles/globals.css";

// import ClientAuthProvider from "~/providers/client-auth-provider";

export type NextPageWithLayout<P = Record<string, never>, IP = P> = NextPage<P, IP> & { // Defines custom property for a NextPage with layout
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps<{ session: Session | null }> & {
  Component: NextPageWithLayout,
}

function App ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout): ReactElement {

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)


  return (
    <SessionProvider session={session}>
      <Fonts />
      {/* <ClientAuthProvider> */}
        {getLayout(<Component {...pageProps} />)}
      {/* </ClientAuthProvider> */}
    </SessionProvider>
  );
};

export default App;

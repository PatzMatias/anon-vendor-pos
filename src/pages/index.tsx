import Head from "next/head";
import Link from "next/link";
// import SignIn from "~/components/SignIn"
import { 
  useSession, 
  // getProviders
  // signIn, signOut 
} from "next-auth/react";
import { ApplyBaseLayout  }from "~/components/layout/BaseLayout";
import type { ReactElement } from "react";
// import { getServerAuthSession } from "~/server/auth";
// import { GetServerSidePropsContext } from "next";

export default function Home() {
  const {status} = useSession();

  return (
    <>
      <Head>
        <title>Welcome - Anon Vendor POS</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen w-full flex-col items-center justify-center text-">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1>Welcome to <span>Anon Vendor POS</span></h1>
          {status === "loading" && <p>Verifying login...</p>}
          {status === "unauthenticated" && <Link href={'/auth/signin'}>Please signin to continue</Link>}  
          {status === "authenticated" && <Link href={'/dashboard'}>Go to dashboard</Link>}
        </div>
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return ApplyBaseLayout(page);
};

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const session = await getServerAuthSession(context);
  
//   // If the user is already logged in, redirect.
//   // Note: Make sure not to redirect to the same page
//   // To avoid an infinite loop!
//   if (session) {
//     return { redirect: { destination: "/dashboard" } };
//   }

//   const providers = await getProviders();
  
//   return {
//     props: { providers: providers ?? [] },
//   }
// }
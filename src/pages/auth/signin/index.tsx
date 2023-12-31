import type { GetServerSidePropsContext, InferGetServerSidePropsType, } from "next";
import { getProviders, signIn } from "next-auth/react";
import type { ClientSafeProvider } from "next-auth/react";
import type { ReactElement } from "react";
import FullPageLayout from "~/components/layout/FullPageLayout";
import { Button } from "~/components/ui/Button";
import { getServerAuthSession } from "~/server/auth";

function GoogleSVG() {
  return (
    <>
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48">
        <defs>
        <path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/>
        </defs>
        <clipPath id="b">
          <use xlinkHref="#a" overflow="visible"/>
        </clipPath>
        <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"/>
        <path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/>
        <path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/>
        <path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/>
      </svg>
    </>
  )
}

export default function SignIn({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(providers);
  return (
    <section className="container h-full flex items-center justify-center px-6 mx-auto">
      
      {Object.values(providers).map((provider: ClientSafeProvider) => (
        <div key={provider.name}>
          <Button variant="outline" size="lg" onClick={() => {
            void signIn(provider.id)
          }}>
            { provider.name === "Google" && (<GoogleSVG />) }
            <span className="ml-2 text-lg">Sign in with <b>{provider.name}</b></span>
          </Button>
        </div>
      ))}
    </section>
  )
}

SignIn.getLayout = function getLayout(page: ReactElement) {
  return <FullPageLayout>{page}</FullPageLayout>;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerAuthSession(context);
  
  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = await getProviders();
  
  return {
    props: { providers: providers ?? [] },
  }
}
import type { GetServerSidePropsContext, InferGetServerSidePropsType, } from "next";
import { getProviders, signIn } from "next-auth/react";
import type { ClientSafeProvider } from "next-auth/react";
import type { ReactElement } from "react";
import { ApplyBaseLayout } from "~/components/layout/BaseLayout";
import { getServerAuthSession } from "~/server/auth";

export default function SignIn({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {

  return (
    <>
      {Object.values(providers).map((provider: ClientSafeProvider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  )
}

SignIn.getLayout = function getLayout(page: ReactElement) {
  return ApplyBaseLayout(page);
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
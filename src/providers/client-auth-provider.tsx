
import { createContext, PropsWithChildren, useState, useContext, useEffect, useCallback } from 'react';
import {User,onAuthStateChanged, signInWithCustomToken } from 'firebase/auth';
import { useSession, signOut as sessionSignOut } from "next-auth/react";
import { auth } from '~/lib/firebase/client-config';

type authStatus = 'authenticated' | 'unauthenticated' | 'loading';

const AuthCtx = createContext<{
  signIn(token: string): void;
  status: authStatus;
  signOut(): void;
  user: User | null;
}>({
  signIn(a: string) {},
  status: 'loading',
  signOut() {},
  user: null,
});
export const useAuth = () => useContext(AuthCtx);

const ClientAuthProvider = ({ children }: PropsWithChildren<{}>) => {
  const [status, setStatus] = useState<authStatus>('loading');

  const { data: session } = useSession();

  const signIn = useCallback(async (customToken: string) => {
    try {
      setStatus('loading');
      await signInWithCustomToken(auth, customToken);
      setStatus('authenticated');
    } catch (error) {
      setStatus('unauthenticated');
      console.error(error);
    }
  },[]);

  const signOut = async () => {
    setStatus('authenticated');
    await auth.signOut();
    sessionSignOut();
  };

  // sign in with session customtoken becomes available
  useEffect(() => {
    if('unauthenticated' === status && session && session.customToken) {
      signIn(session.customToken)
    }
  },[]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setStatus('authenticated');
      }
      else {
        signOut();
      }
    });
  }, [status]);


  return (
    <AuthCtx.Provider
      value={{
        signIn,
        status,
        signOut,
        user: auth.currentUser,
      }}>
      {children}
    </AuthCtx.Provider>
  );
};

export default ClientAuthProvider;
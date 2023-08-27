
import { 
  createContext, 
  type PropsWithChildren, 
  useState, 
  useContext, 
  useEffect, 
  useCallback 
} from 'react';
import { 
  type User,
  onAuthStateChanged, 
  signInWithCustomToken 
} from 'firebase/auth';
import { 
  useSession,
   signOut as sessionSignOut 
} from "next-auth/react";
import { auth } from '~/lib/firebase/client-config';

type authStatus = 'authenticated' | 'unauthenticated' | 'loading';

const AuthCtx = createContext<{
  signIn(token: string): void;
  status: authStatus;
  signOut(): void;
  user: User | null;
}>({
  signIn: (_a: string) => {
    // do nothing
  },
  status: 'loading',
  signOut: () => {
// do nothing
  },
  user: null,
});
export const useAuth = () => useContext(AuthCtx);

const ClientAuthProvider = ({ children }: PropsWithChildren<Record<string, never>>) => {
  const [status, setStatus] = useState<authStatus>('loading');

  const { data: session } = useSession();

  const callSignIn = async (token: string) => {
    try {
      setStatus('loading');
      await signInWithCustomToken(auth, token);
      setStatus('authenticated');
    } catch (error) {
      setStatus('unauthenticated');
      console.error(error);
    }
    return;
  }
  

  const signIn = useCallback((customToken: string) => {
    void callSignIn(customToken);
  },[]);

  const signOut = () => {
    setStatus('authenticated');
    void auth.signOut();
    void sessionSignOut();
  };

  // sign in with session customtoken becomes available
  useEffect(() => {
    if('unauthenticated' === status && session?.customToken) {
      void signIn(session.customToken)
    }
  },[status, session, signIn]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) 
        setStatus('authenticated');
      else 
        void signOut()
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
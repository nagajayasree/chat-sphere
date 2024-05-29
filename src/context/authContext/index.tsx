'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '@/src/firebase/firebase';

interface UserProps {
  email: string;
  password: string;
}

const AuthContext = createContext({});

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }: any) {
  const [userInfo, setUserInfo] = useState<any>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUserInfo(user);
    });

    return unsubscribe;
  }, []);

  const onUserSignUp = async ({ email, password }: UserProps) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const onUserSignIn = async ({ email, password }: UserProps) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const onUserSignOut = () => {
    return auth.signOut();
  };

  const getUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  };

  const value = {
    userInfo,
    onUserSignUp,
    onUserSignIn,
    onUserSignOut,
    getUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

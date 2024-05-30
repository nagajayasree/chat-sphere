'use client';

import { createContext, useContext, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '@/src/firebase/index';

interface UserProps {
  email: string;
  password: string;
}

export const AuthContext = createContext({});

export default function AuthProvider({ children }: any) {
  const [userInfo, setUserInfo] = useState<string | null>(null);

  const onUserSignUp = async ({ email, password }: UserProps) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Sign up error:', error);
    }
  };

  const onUserSignIn = async ({ email, password }: UserProps) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      if (auth.currentUser) {
        setUserInfo(auth.currentUser.email);
      }
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  const onUserSignOut = async () => {
    try {
      await auth.signOut();
      setUserInfo(null);
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  const getUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userId = user.uid;
        console.log(userId);
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

export function useAuth() {
  return useContext(AuthContext);
}

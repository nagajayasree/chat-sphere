'use client';

import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/src/firebase/firebase';

interface SignInProps {
  email: string;
  password: string;
}

export const SignIn: React.FC<SignInProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onClickSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <main>
      <div>
        <p>This is Sign In component!</p>
        <TextField
          value={email}
          label="Email"
          color="primary"
          variant="outlined"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          value={password}
          label="Password"
          color="primary"
          variant="outlined"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button onClick={onClickSignIn} variant="contained" color="primary">
          Sign In
        </Button>
      </div>
    </main>
  );
};

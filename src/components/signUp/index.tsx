'use client';

import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/src/firebase/firebase';

interface SignUpProps {
  email: string;
  password: string;
  onClickLogin?: (e: React.MouseEvent) => void;
}

export const SignUp: React.FC<SignUpProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [notice, setNotice] = useState('');

  const onSignUp = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // S
    //     const user = userCredential.user;
    //     console.log(user);
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode, errorMessage);
    //   });

    if (password === confirmPassword) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log(auth.currentUser);
      } catch {
        setNotice('Sorry, something went wrong. Please try again.');
      }
    }
  };

  return (
    <main>
      <div>
        <p>This is Sign Up component!</p>
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
        <TextField
          value={confirmPassword}
          label="Confirm Password"
          color="primary"
          variant="outlined"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        {notice}

        <Button onClick={onSignUp} variant="contained" color="primary">
          Sign Up
        </Button>
      </div>
    </main>
  );
};

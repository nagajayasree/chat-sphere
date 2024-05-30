'use client';

import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useAuth } from '@/src/context/authContext';

export const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notice, setNotice] = useState('');

  const { userInfo, onUserSignIn }: any = useAuth();

  const onSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await onUserSignIn({ email, password });
      setNotice('User logged in successfully!');
    } catch (err) {
      console.log(err);
      setNotice('Sorry, something went wrong. Please try again.');
    }
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
        <Button onClick={onSignIn} variant="contained" color="primary">
          Sign In
        </Button>
        {notice}
        {userInfo}
      </div>
    </main>
  );
};

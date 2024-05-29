'use client';

import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useAuth } from '@/src/context/authContext';

export const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [notice, setNotice] = useState('');

  const { onUserSignUp }: any = useAuth();

  const onSignUp = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setNotice('Passwords do not match.');
      return;
    } else {
      try {
        await onUserSignUp({ email, password });
        setNotice('User created successfully!');
      } catch (err) {
        console.log(err);
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

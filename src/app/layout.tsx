'use client';
import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from '@/src/theme';
import AuthProvider from '../context/authContext';

const metadata: Metadata = {
  title: 'ChatSphere',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <body>{children}</body>
          </ThemeProvider>
        </AuthProvider>
      </AppRouterCacheProvider>
    </html>
  );
}

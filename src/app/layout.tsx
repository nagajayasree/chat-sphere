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
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <CssBaseline />
            <body>{children}</body>
          </AuthProvider>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}

import React, { Suspense } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom';

import Outline from '@/components/Outline';
import Routes from '@/Routes';
import { theme } from '@/theme';
import Viewport from '@/Viewport';

const queryClient = new QueryClient();

export const App = () => {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Suspense fallback={<Outline />}>
                        <Viewport>
                            <Routes />
                        </Viewport>
                    </Suspense>
                </BrowserRouter >
            </QueryClientProvider>
        </ThemeProvider >
    )
}

export default App; 
import type { AppProps } from 'next/app';

import { NextUIProvider } from '@nextui-org/react';

import { MainLayout } from '../components/layouts';
import { darkTheme } from '../themes';

import '../styles/globals.css';


function PokemoniumApp({Component, pageProps}: AppProps) {
    return (
        <NextUIProvider theme={darkTheme}>
            <MainLayout title={'Home - Pokémonium'}>
                <Component {...pageProps} />
            </MainLayout>
        </NextUIProvider>
    );
}

export default PokemoniumApp;

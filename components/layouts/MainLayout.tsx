import { FC } from 'react';
import Head from 'next/head';
import { NavBar } from '../ui';


export const MainLayout: FC<{ title?: string }> = ({children, title = 'Pokémonium'}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="author" content="0xdgr"/>
                <meta name="description" content="Everything about XXXX pokemon"/>
                <meta name="keywords" content="XXXX, pokemon, pokedex"/>
            </Head>

            <NavBar/>

            <main className={'main'}>
                {children}
            </main>
        </>
    );
}
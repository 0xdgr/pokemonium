import { Spacer, useTheme, Text, Link } from '@nextui-org/react';

import Image from 'next/image';
import { HeartIcon } from './HeartIcon';


export const NavBar = () => {

    const {theme} = useTheme();

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            padding: '0 20px',
            alignItems: 'center',
            justifyContent: 'start',
            backgroundColor: theme?.colors.gray100.value,
        }}>

            <Link href="/">
                <Image
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                    width={80}
                    height={80}
                    alt="Pokemonium icon"
                />
            </Link>
            <Link href="/">
                <Text h2>Pokémonium</Text>
            </Link>

            <Spacer css={{flex: 1}}/>

            <Link href="/favorites">
                <Text><HeartIcon filled size={12}/> Favorites</Text>
            </Link>
        </div>
    );
}
import { Spacer, useTheme, Text } from '@nextui-org/react';

import Image from 'next/image';


export const NavBar = () => {

    const {theme} = useTheme();

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            padding: '0 15px',
            alignItems: 'center',
            justifyContent: 'start',
            backgroundColor: theme?.colors.gray100.value,
        }}>
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                width={80}
                height={80}
                alt="Pokemonium icon"
            />

            <Text h2>Pokémonium</Text>

            <Spacer css={{flex: 1}}/>

            <Text>Favorites</Text>
        </div>
    );
}
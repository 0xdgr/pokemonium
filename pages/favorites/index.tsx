import { Grid, Text } from '@nextui-org/react';
import { SmallPokemon } from '../../interfaces';
import Head from 'next/head';


interface Props {
    favorites: SmallPokemon[];
}

const Favorites = ({favorites}: Props) => {
    return (
        <>
            <Head>
                <title>Your Favorite Pokémons - Pokémonium</title>
            </Head>

            <Grid.Container gap={2} justify="flex-start">
                <Grid xs={12}>
                    <Text h1>Your Favorite Pokémons</Text>
                </Grid>

                {/*{
                favorites.map((poke) => (
                    <PokeCard key={poke.id} pokemon={poke}/>
                ))
            }*/}
            </Grid.Container>
        </>

    );
}

export default Favorites;
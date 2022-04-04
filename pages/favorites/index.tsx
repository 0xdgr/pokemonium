import { useEffect, useState } from 'react';
import Head from 'next/head';

import { Grid, Text } from '@nextui-org/react';

import { FavoritesEmpty } from '../../components/ui';
import { getFavoritePokemons } from '../../lib/favorites';
import { PokeCard } from '../../components/pokemon';
import { SmallPokemon } from '../../interfaces';


const Favorites = () => {

    const [favorites, setFavorites] = useState<SmallPokemon[]>([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        (async () => {
            setFavorites(
                await getFavoritePokemons()
                    .then((favs) => {
                        setLoading(false);
                        return favs;
                    }));
        })();
    }, []);

    if (isLoading) return <p>Loading...</p>;
    if (favorites.length === 0) return <FavoritesEmpty/>;

    return (
        <>
            <Head>
                <title>Your Favorite Pokémons - Pokémonium</title>
            </Head>

            <Grid.Container gap={2} justify="flex-start">
                <Grid xs={12}>
                    <Text h1>Your Favorite Pokémons</Text>
                </Grid>

                {
                    favorites.map((poke) => (
                        <PokeCard key={poke.id} pokemon={poke}/>
                    ))
                }
            </Grid.Container>
        </>
    );
}

export default Favorites;
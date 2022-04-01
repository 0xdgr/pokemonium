import type { GetStaticProps, NextPage } from 'next';

import { Grid } from '@nextui-org/react';

import { pokeApi } from '../api';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { PokeCard } from '../pokemon';


interface Props {
    pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({pokemons}) => {
    return (
        <Grid.Container gap={2} justify="flex-start">
            {/* todo: search bar */}

            {
                pokemons.map((poke) => (
                    <PokeCard key={poke.id} pokemon={poke}/>
                ))
            }
        </Grid.Container>
    );
}

export const getStaticProps: GetStaticProps = async (ctx) => {

    const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

    const pokemons: SmallPokemon[] = data.results.map((poke, i) => {
        return {
            ...poke,
            id: i + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${i + 1}.png`
        };
    });

    return {
        props: {
            pokemons
        }
    };
}

export default Home;

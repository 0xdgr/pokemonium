import type { GetStaticProps, NextPage } from 'next';

import { Card, Grid, Image, Row, Text } from '@nextui-org/react';

import { pokeApi } from '../api';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { PokeCard } from '../components/ui/PokeCard';


interface Props {
    pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({pokemons}) => {
    return (
        <section>
            <Grid.Container gap={2} justify="flex-start">
                {
                    pokemons.map(({name, id, image}) => (
                        <PokeCard key={id} name={name} url={''} id={id} image={image}/>
                    ))
                }
            </Grid.Container>
        </section>
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

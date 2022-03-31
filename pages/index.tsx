import type { GetStaticProps, NextPage } from 'next';

import { Card, Grid, Image, Row, Text } from '@nextui-org/react';

import { pokeApi } from '../api';
import { PokemonListResponse, SmallPokemon } from '../interfaces';


interface Props {
    pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({pokemons}) => {
    return (
        <section>
            <Grid.Container gap={2} justify="flex-start">
                {
                    pokemons.map(({name, id, image}) => (
                        <Grid key={id} xs={6} sm={3} md={2} xl={1}>

                            <Card hoverable clickable>
                                <Card.Body css={{p: 1}}>
                                    <Card.Image src={image} width="100%" height={140}/>
                                </Card.Body>
                                <Card.Footer>
                                    <Row justify="space-between">
                                        <Text transform='capitalize'>{name}</Text>
                                        <Text>#{id}</Text>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        </Grid>
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

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { PokemonResponse } from '../../interfaces';
import { getAllPokemonsIds } from '../../lib/pokemons';
import { pokeApi } from '../../api';
import { Card, Container, Grid, Image, Text } from '@nextui-org/react';
import Head from 'next/head';
import { SaveFavoriteButton } from '../../components/ui/SaveFavoriteButton';


interface PokemonProps {
    pokemon: PokemonResponse;
}

const PokemonPage: NextPage<PokemonProps> = ({pokemon}) => {

    const capitalizedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    return (
        <>
            <Head>
                <title>{capitalizedName} - Pokémonium</title>
            </Head>
            <Grid.Container css={{marginTop: '5px'}} gap={2}>
                <Grid xs={12} sm={4}>
                    <Card hoverable css={{padding: '30px'}}>
                        <Card.Body>
                            <Image src={pokemon.sprites.other?.home.front_default || ''}
                                   alt={pokemon.name}
                                   width="100%"
                                   height={200}
                            />
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header css={{display: 'flex', justifyContent: 'space-between'}}>
                            <Text h1 transform="capitalize" css={{letterSpacing: '0.5px'}}>{pokemon.name}</Text>

                            <SaveFavoriteButton id={pokemon.id}/>
                        </Card.Header>

                        <Card.Body>
                            <Text size={30}>Game Sprites</Text>

                            <Container display="flex">

                                <Image src={pokemon.sprites.front_default}
                                       alt="{pokemon.name} sprite front default"
                                       width={100}
                                       height={100}/>
                                <Image src={pokemon.sprites.back_default}
                                       alt="{pokemon.name} sprite back default"
                                       width={100}
                                       height={100}/>
                                <Image src={pokemon.sprites.front_shiny}
                                       alt="{pokemon.name} front shiny"
                                       width={100}
                                       height={100}/>
                                <Image src={pokemon.sprites.back_shiny}
                                       alt="{pokemon.name} sprite back shiny"
                                       width={100}
                                       height={100}/>

                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPokemonsIds();

    return {
        paths,
        fallback: false
    };
}

export const getStaticProps: GetStaticProps = async ({params}) => {

    const {id} = params as { id: string };

    const {data} = await pokeApi.get<PokemonResponse>(`/pokemon/${id}`);

    return {
        props: {
            id,
            pokemon: data
        },
    }
}

export default PokemonPage;
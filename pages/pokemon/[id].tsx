import { GetStaticProps, NextPage } from 'next';

import { SmallPokemon } from '../../interfaces';
import { getAllPokemonsIds } from '../../lib/pokemons';


interface PokemonProps {
    pokemon?: SmallPokemon;
    id: string;
}

const PokemonPage: NextPage<PokemonProps> = ({id, pokemon}) => {

    return (
        <>
            <p>{id}</p>
        </>
    );
}

export const getStaticPaths = async () => {
    const paths = getAllPokemonsIds();

    return {
        paths,
        fallback: true
    };
}

export const getStaticProps: GetStaticProps = async ({params}) => {

    return {
        props: {
            id: params.id
        },
    }
}

export default PokemonPage;
import { PokemonListResponse, SmallPokemon } from '../../interfaces';
import { pokeApi } from '../../api';


const toggleFavorite = (id: number) => {

    let favorites: number[] = getFavoritesIds();

    if (favorites.includes(id)) {
        favorites = favorites.filter(pokeId => pokeId != id);
    } else {
        favorites.push(id);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
};

const isFavorited = (id: number): boolean => {
    const favorites: number[] = getFavoritesIds();

    return favorites.includes(id);
};

const getFavoritesIds = (): number[] => {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}

const getFavoritePokemons = async () => {
    const ids = getFavoritesIds();

    const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

    const favorites: SmallPokemon[] = ids.map(id => {
        const resultId = id - 1;

        return {
            id,
            name: data.results[resultId].name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`,
            url: data.results[resultId].url,
        }
    });

    return favorites;
}

export {
    toggleFavorite,
    isFavorited,
    getFavoritesIds,
    getFavoritePokemons,
};
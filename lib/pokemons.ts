export const getAllPokemonsIds = () => {
    const pokemons151 = Array.from({length: 151}, (_, i) => `${i + 1}`);

    return pokemons151.map(id => {
        return {
            params: {
                id
            }
        };
    });
};

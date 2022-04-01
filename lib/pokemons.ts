export const getAllPokemonsIds = () => {
    return Array.from({length: 151}, (_, i) => i)
        .map(i => {
            return {
                params: {
                    id: String(i + 1)
                }
            };
        });
};

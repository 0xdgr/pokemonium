import { Container, Image, Link, Text } from '@nextui-org/react';

export const FavoritesEmpty = () => {
    return (
        <Container css={{
            display: 'flex',
            flexDirection: 'column',
            height: 'calc(100vh - 100px)',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
        }}>
            <Text h1>You don't have Favorites yet</Text>
            <Link href="/">Start Browsing</Link>

            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
                alt="No favorites yet"
                width={500}
                height={500}
                css={{
                    opacity: '0.1',
                    width: '500px',
                    height: '500px',
                }}
            />
        </Container>
    );
}
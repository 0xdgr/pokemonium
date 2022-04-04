import { FC, useEffect, useState } from 'react';

import { Button } from '@nextui-org/react';

import { HeartIcon } from './HeartIcon';
import { toggleFavorite } from '../../lib/favorites';
import { isFavorited } from '../../lib/favorites/favoritesStorage';


interface Props {
    id: number;
}

export const SaveFavoriteButton: FC<Props> = ({id}) => {

    const [filled, setFilled] = useState<boolean>(false);

    useEffect(() => {
         setFilled(isFavorited(id));
    }, [id, filled]);

    const onToggleFavorite = () => {
        toggleFavorite(id);
        setFilled(!filled);
    }

    return (
        <Button auto color="error" icon={<HeartIcon filled={filled}/>}
                onClick={onToggleFavorite}>
        </Button>
    );
}
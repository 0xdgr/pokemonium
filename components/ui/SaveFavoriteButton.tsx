import React, { FC, useEffect, useState } from 'react';

import { Button } from '@nextui-org/react';

import { HeartIcon } from '.';
import { toggleFavorite, isFavorited } from '../../lib/favorites';


interface Props {
    id: number;
}

export const SaveFavoriteButton: FC<Props> = ({id}) => {

    const [filled, setFilled] = useState<boolean>(false);

    useEffect(() => {
         setFilled(isFavorited(id));
    }, [id, filled]);

    const onToggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        toggleFavorite(id);
        setFilled(!filled);
    }

    return (
        <Button auto color="error" icon={<HeartIcon filled={filled}/>}
                onClick={onToggleFavorite}>
        </Button>
    );
}
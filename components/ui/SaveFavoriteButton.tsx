import { FC } from 'react';

import { Button } from '@nextui-org/react';

import { HeartIcon } from './HeartIcon';


interface Props {
    id: number;
}

export const SaveFavoriteButton: FC<Props> = (id) => {

    const onToggleFavorite = () => {
        console.log(id)
    }

    return (
        <Button auto color="error" icon={<HeartIcon filled={false}/>}
                onClick={onToggleFavorite}>
        </Button>
    );
}
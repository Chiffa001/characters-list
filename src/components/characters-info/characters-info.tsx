import React, { type FC } from 'react';
import { Typography } from '@mui/material';
import { type Character } from '../../types/character';

type Props = {
  character: Omit<Character, 'url'>
  details?: boolean
};

export const CharactersInfo: FC<Props> = ({
  character: {
    name,
    gender,
    mass,
    eye_color: eyeColor,
    hair_color: hairColor,
    height
  },
  details = false
}) => (<>
    <Typography gutterBottom variant="h5" component="h3">
        {name}
    </Typography>
    {details && (
        <>
            <Typography gutterBottom variant="h6">
                Gender: {gender}
            </Typography>
            <Typography gutterBottom variant="h6">
                Mass: {mass}
            </Typography>
            <Typography gutterBottom variant="h6">
                Eye color: {eyeColor}
            </Typography>
            <Typography gutterBottom variant="h6">
                Hair color: {hairColor}
            </Typography>
            <Typography gutterBottom variant="h6">
                Height: {height}
            </Typography>
        </>
    )}
</>);

import React, { type FC } from 'react';
import { type Character } from '../../types/character';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import logo from './images/logo.png';

type Props = {
  character: Character
};

export const CharactersItem: FC<Props> = ({ character: { name } }) => {
  return (
        <Card>
            <CardActionArea>
                <CardMedia component='img' image={logo} alt='image' />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h3">
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
  );
};

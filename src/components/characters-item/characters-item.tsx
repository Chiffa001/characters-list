import React, { type FC, useState } from 'react';
import { type Character } from '../../types/character';
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  TextField
} from '@mui/material';
import logo from './images/logo.png';
import { useNavigate } from 'react-router-dom';
import { CharactersInfo } from '../characters-info';

import styles from './style.module.css';

type Props = {
  character: Character
  details?: boolean
};

const Item: FC<Props> = ({
  character: {
    name,
    gender,
    mass,
    eye_color: eyeColor,
    hair_color: hairColor,
    height,
    url
  }, details = false
}) => {
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);

  const [editedName, setEditedName] = useState(name);
  const [editedGender, setEditedGender] = useState(gender);
  const [editedMass, setEditedMass] = useState(mass);
  const [editedEyeColor, setEditedEyeColor] = useState(eyeColor);
  const [editedHairColor, setEditedHairColor] = useState(hairColor);
  const [editedHeight, setEditedHeight] = useState(height);

  const editedCharacter = {
    name: editedName,
    gender: editedGender,
    mass: editedMass,
    eye_color: editedEyeColor,
    hair_color: editedHairColor,
    height: editedHeight
  };

  const editFieldHandler =
        (f: (v: string) => void) =>
          (event: React.ChangeEvent<HTMLInputElement>) => {
            f(event.target.value);
          };

  const info = (
        <>
            {!isEdit && (
                <CharactersInfo character={editedCharacter} details={details} />
            )}
            {isEdit && (
                <div className={styles.column}>
                    <TextField
                        className={styles.textField}
                        value={editedName}
                        label="Name"
                        onChange={editFieldHandler(setEditedName)}
                    />
                    <TextField
                        className={styles.textField}
                        value={editedGender}
                        label="Gender"
                        onChange={editFieldHandler(setEditedGender)}
                    />
                    <TextField
                        className={styles.textField}
                        value={editedMass}
                        label="Mass"
                        onChange={editFieldHandler(setEditedMass)}
                    />
                    <TextField
                        className={styles.textField}
                        value={editedEyeColor}
                        label="Eye Color"
                        onChange={editFieldHandler(setEditedEyeColor)}
                    />
                    <TextField
                        className={styles.textField}
                        value={editedHairColor}
                        label="Hair Color"
                        onChange={editFieldHandler(setEditedHairColor)}
                    />
                    <TextField
                        className={styles.textField}
                        value={editedHeight}
                        label="Height"
                        onChange={editFieldHandler(setEditedHeight)}
                    />
                </div>
            )}
            {details && (
                <div className={styles.btnContainer}>
                    {!isEdit && (
                        <Button
                            color="info"
                            onClick={() => {
                              setIsEdit(true);
                            }}
                        >
                            Edit
                        </Button>
                    )}
                    {isEdit && (
                        <>
                            <Button
                                color="info"
                                onClick={() => {
                                  setIsEdit(false);
                                }}
                            >
                                Save
                            </Button>
                        </>
                    )}
                </div>
            )}
        </>
  );

  const mainInformation = (
        <>
            <CardMedia component="img" image={logo} alt="image" />
            <CardContent>{info}</CardContent>
        </>
  );

  const openDetailsInfo = () => {
    const id = url.split('/').at(-2) as string;
    navigate(`/person/${id}`);
  };

  return (
        <Card sx={{ maxWidth: '30vw' }}>
            {!details
              ? (
                <CardActionArea onClick={openDetailsInfo}>
                    {mainInformation}
                </CardActionArea>
                )
              : (
                  mainInformation
                )}
        </Card>
  );
};

export const CharactersItem = React.memo(Item);

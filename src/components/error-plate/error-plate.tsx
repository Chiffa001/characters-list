import React from 'react';
import { Paper, Typography } from '@mui/material';
import { ErrorOutline } from '@mui/icons-material';

import styles from './style.module.css';

export const ErrorPlate = () => (
    <Paper className={styles.errorPlate}>
        <ErrorOutline color='error' />
        <Typography ml={1}>Что-то пошло не так</Typography>
    </Paper>
);

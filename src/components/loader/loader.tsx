import React from 'react';
import { CircularProgress } from '@mui/material';

import styles from './style.module.css';

export const Loader = () => (
    <div className={styles.loader}>
        <CircularProgress />
    </div>
);

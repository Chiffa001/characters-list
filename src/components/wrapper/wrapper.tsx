import React, { type FC, type PropsWithChildren } from 'react';
import { Container } from '@mui/material';

import styles from './style.module.css';

export const Wrapper: FC<PropsWithChildren> = ({ children }) => (
    <Container maxWidth='lg' className={styles.wrapper}>{children}</Container>
);

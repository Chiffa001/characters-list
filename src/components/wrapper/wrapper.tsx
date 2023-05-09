import React, { type FC, type PropsWithChildren } from 'react';
import { Container, type ContainerTypeMap } from '@mui/material';

import styles from './style.module.css';

type Props = {
  maxWidth?: ContainerTypeMap['props']['maxWidth']
};

export const Wrapper: FC<PropsWithChildren<Props>> = ({ children, maxWidth = 'lg' }) => (
    <Container maxWidth={maxWidth} className={styles.wrapper}>{children}</Container>
);

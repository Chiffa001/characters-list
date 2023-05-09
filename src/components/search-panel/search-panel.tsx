import React, { type FC } from 'react';
import { TextField } from '@mui/material';

type Props = {
  value: string
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
};

export const SearchPanel: FC<Props> = ({ value, onChange }) => {
  return (
        <TextField
            id="outlined-search"
            fullWidth
            label="Search"
            type="search"
            value={value}
            onChange={onChange}
        />
  );
};

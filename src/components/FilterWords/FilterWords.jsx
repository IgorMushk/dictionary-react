import React from 'react';
import TextField from '@mui/material/TextField';
import css from './FilterWords.module.css'

export default function FilterWords({onChange}) {
  return (
    <div className={css.filterWrapper}>
      <TextField
        id="outlined-basic"
        label="Filter"
        variant="outlined"
        name="ukWord"
        onChange={onChange}
      />
    </div>
  );
}

import React from 'react';
import TextField from '@mui/material/TextField';

export default function FilterWords({onChange}) {
  return (
    <div>
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

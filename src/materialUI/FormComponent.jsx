import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function BasicTextFields() {
  return (
    <Paper elevation={4} className='form_paper'>
        <Box
    className='forms'
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic"  label="Name" variant="standard" />
      <TextField id="standard-basic" label="Contact No" variant="standard" />
      <TextField id="standard-basic" label="Email ID" variant="standard" />
    </Box>
    
    <Stack direction="row" className='submit' spacing={3}>
      <Button variant="contained">Submit</Button>
    </Stack>
    </Paper>
  );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import logo from '../../../src/assets/images/Raw-Logox300.png'

export default function Header() {
  return (
      <Container maxWidth="full" disableGutters={true}>
        <Box sx={{ 
          bgcolor: '#000000',
          height: '300px',  }}>
        <img src={logo} className="tbd" alt="logo" />
        </Box>
      </Container>
  );
}
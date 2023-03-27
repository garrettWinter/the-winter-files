import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import logo from '../../../src/assets/images/Raw-Logox300.png'

export default function Header() {
  return (
      <Container maxWidth="full" disableGutters={true}>
        <Box sx={{ 
          bgcolor: '#000000',
          height: '300px',
          paddingTop: 2,
          paddingBottom: 2 }}>
        <img src={logo} alt="Garrett Winter Full Stack Developer - Logo of a head with gears" title='Garrett Winters - Full Stack Developer - Logo of a head with gears'/>
        </Box>
      </Container>
  );
}
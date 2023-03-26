import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import gitHub from '../../../src/assets/images/github.png'
import linkedIn from '../../../src/assets/images/linkedin.png'
import stackOverflow from '../../../src/assets/images/stack-overflow.png'


const Footer = () => {
  return (
    <Container maxWidth="full" disableGutters={true}>
      <Box sx={{
        bgcolor: '#000000',
      }}>
        <footer>
          <div>Footer! Pulling from footer component</div>
          <div>
            <img src={gitHub} className="tbd" alt="Link to gitHub profile" />
            <img src={linkedIn} className="tbd" alt="Link to linkedIn profile" />
            <img src={stackOverflow} className="tbd" alt="Link to stackOverflow profile" />
          </div>
        </footer>
      </Box>
    </Container>
  );
};

export default Footer;

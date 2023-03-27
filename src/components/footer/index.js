import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import gitHub from '../../../src/assets/images/github.png'
import linkedIn from '../../../src/assets/images/linkedin.png'
import stackOverflow from '../../../src/assets/images/stack-overflow.png'

const styles = {
  footerText: {
    color: 'white',
    fontSize: 25
  },
  logos: {
    padding: "10px 20px 10px 20px"
  },
}

const Footer = () => {
  return (
    <Container maxWidth="full" disableGutters={true}>
      <Box sx={{
        bgcolor: '#000000',
        position: 'fixed',
        bottom: 0,
        width: '100%'
      }}>
        <footer >
        <div style={styles.footerText}> Clink a logo below to see my profile.</div>          
          <div>
            <a href='https://github.com/garrettWinter' target='_blank' rel="noreferrer"><img src={gitHub} style={styles.logos} alt="Link to gitHub profile" /></a>
            <a href='https://www.linkedin.com/in/garrett-winter-a684a094/' target='_blank' rel="noreferrer"><img src={linkedIn} style={styles.logos} alt="Link to linkedIn profile" /></a>
            <a href='https://stackoverflow.com/users/20218517/garrettwinter' target='_blank' rel="noreferrer"><img src={stackOverflow} style={styles.logos} alt="Link to stackOverflow profile" /></a>
          </div>
          <div style={styles.footerText}> Garrett Winter © Copyright 2023, with no rights reserved.</div>
        </footer>
      </Box>
    </Container>
  );
};

export default Footer;

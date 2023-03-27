import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


const styles = {
  ul: {
    padding: 0,
    margin: 0,
    display: 'inline-flex',
  },
  navLinks: {
    listStyleType: 'none',
    padding: '0px 15px 10px 5px'
  },
  activeLink:{
    fontSize: 25,
    color: '#f9a33f'
  },
  inactiveLink:{
    fontSize: 25,
    color: 'white'
  }

}


const Navigation = ( {currentPage, handlePageChange} ) => {

  return (
    <Container maxWidth="full" disableGutters={true}>
    <Box sx={{ 
      bgcolor: '#000000',
   }}>
    <ul style={styles.ul}>
      <li style={styles.navLinks}>
        <a 
          href="#AboutMe"
          onClick={() => handlePageChange('AboutMe')}
          style={currentPage === 'AboutMe' ? styles.activeLink : styles.inactiveLink}
        >
          About Me
        </a>
      </li>
      <li style={styles.navLinks}>
        <a
          href="#Portfolio"
          onClick={() => handlePageChange('Portfolio')}
          style={currentPage === 'Portfolio' ? styles.activeLink : styles.inactiveLink}
        >
          Portfolio
        </a>
      </li>
      <li style={styles.navLinks}>
        <a
          href="#ContactMe"
          onClick={() => handlePageChange('ContactMe')}
          style={currentPage === 'ContactMe' ? styles.activeLink : styles.inactiveLink}
        >
          Contact Me
        </a>
      </li>
      <li style={styles.navLinks}>
        <a
          href="#Resume"
          onClick={() => handlePageChange('Resume')}
          style={currentPage === 'Resume' ? styles.activeLink : styles.inactiveLink}
        >
          Resume
        </a>
      </li>
    </ul>
    </Box>
  </Container>
);
};

export default Navigation;

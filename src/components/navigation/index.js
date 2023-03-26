import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Navigation = ( {currentPage, handlePageChange} ) => {

  return (
    <Container maxWidth="full" disableGutters={true}>
    <Box sx={{ 
      bgcolor: '#000000',
   }}>
    <ul>
      <li>
        <a
          href="#AboutMe"
          onClick={() => handlePageChange('AboutMe')}
        // className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'} // Need to update to support my css styles
        >
          About Me
        </a>
      </li>
      <li>
        <a
          href="#Portfolio"
          onClick={() => handlePageChange('Portfolio')}
        // className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} // Need to update to support my css styles
        >
          Portfolio
        </a>
      </li>
      <li>
        <a
          href="#ContactMe"
          onClick={() => handlePageChange('ContactMe')}
        // className={currentPage === 'ContactMe' ? 'nav-link active' : 'nav-link'} // Need to update to support my css styles
        >
          Contact Me
        </a>
      </li>
      <li>
        <a
          href="#Resume"
          onClick={() => handlePageChange('Resume')}
        // className={currentPage === 'ContactMe' ? 'nav-link active' : 'nav-link'} // Need to update to support my css styles
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

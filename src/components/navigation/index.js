import React from 'react';

const Navigation = ( {currentPage, handlePageChange} ) => {

  return (
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
  );
};

export default Navigation;

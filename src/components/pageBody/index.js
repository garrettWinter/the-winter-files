import React, { useState } from 'react';

import AboutMe from '../../pages/aboutMe'
import ContactMe from '../../pages/contactMe'
import Portfolio from '../../pages/portfolio'
import Resume from '../../pages/resume'
import Navigation from '../navigation';

const PageBody = () => {
  const [currentPage, setCurrentPage] = useState('AboutMe')

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'ContactMe') {
      return <ContactMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <nav>
        < Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      </nav>
      {renderPage()}
    </div>
  );
};

export default PageBody;

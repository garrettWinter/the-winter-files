import React, { useState } from 'react';

import AboutMe from '../../pages/aboutMe'
import ContactMe from '../../pages/contactMe'
import Portfolio from '../../pages/portfolio'



const PageBody = () => {
  const [currentPage, setCurrentPage]  = useState ('AboutMe')

  const renderPage = () => {
    if(currentPage === 'AboutMe') {
      return <AboutMe/>;
    }
    if(currentPage === 'ContactMe') {
      return <ContactMe/>;
    }
    if(currentPage === 'Portfolio') {
      return <Portfolio/>;
    }
  }

  // const handlePageChange = (page) => setCurrentPage(page);

  return (
      <div>{renderPage()}</div>
  );
};

export default PageBody;

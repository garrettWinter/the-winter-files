import React, { useState } from 'react';

//Importing Components
import Header from '../header';
import Navigation from '../navigation';
import Footer from '../footer';

//Importing Pages for renderPage
import AboutMe from '../../pages/aboutMe'
import ContactMe from '../../pages/contactMe'
import Portfolio from '../../pages/portfolio'
import Resume from '../../pages/resume'


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
      <header>
        <div><Header /></div>
        <nav>
          < Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </nav>
      </header>
      <main>
        {renderPage()}
      </main>
      <footer>
      <div><br></br><Footer/></div>
      </footer>
    </div>
  );
};

export default PageBody;

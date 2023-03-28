//Importing React Components
import React, { useState } from 'react';

//Importing Custom Components
import Header from '../header';
import Navigation from '../navigation';
import Footer from '../footer';

//Importing Pages for renderPage
import AboutMe from '../pages/aboutMe'
import Contact from '../pages/contact'
import Portfolio from '../pages/portfolio'
import Resume from '../pages/resume'

const styles = {
  header: {
    margin: 0,
    padding: 0,
  },
  flex:{
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  main:{
    flexGrow: 1
  }
}

const PageBody = () => {
  const [currentPage, setCurrentPage] = useState('AboutMe')

  // This function will look at the current page and then have that page be loaded.
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
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
    <div style={styles.flex}>
      <header style={styles.header}>
        <div><Header /></div>
        <nav>
          < Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </nav>
      </header>
      <main style={styles.main}>
        {renderPage()}
      </main>
      <Footer/>
    </div>
  );
};

export default PageBody;

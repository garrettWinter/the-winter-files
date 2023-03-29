//Importing the needed react components to support the about me Page
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// Importing the profile picture for use in the application
import garrettPicture from '../../../../src/assets/images/Garrett200x200.jpg'

const styles = {
  profilePic: {
    borderRadius: '15px',
  },
  bodyText: {
    paddingTop: '15px'
  }
};

const AboutMe = () => {
  return (
    <Container maxWidth="full" disableGutters={true}>
      <Box sx={{
        textAlign: 'left',
        padding: '10px 10%'
      }}>
        <h2>About Me</h2>
        <div><img src={garrettPicture} alt="Link to gitHub profile" style={styles.profilePic} /></div>
        <div style={styles.bodyText}><p>Hello and welcome to my portfolio,</p>

          <p> I'm Garrett Winter, an experienced e-commerce professional and a recent graduate of the Full Stack Web Development program at the University of Minnesota.</p>

          <p>With over 14 years of experience in e-commerce, I have a deep understanding of the industry and have spent a significant portion of my career managing international teams and providing integration monitoring and support. I've also worked as a project manager, overseeing the implementation of websites into our platform and leading the development of payment methods from our platform to be used in APIs. </p>

          <p>As a developer, I specialize in both front-end and back-end technologies, including HTML5, CSS, JavaScript, Bootstrap, Bulma, Material UI, HandlebarsJS, React, Node.JS, MySQL, MongoDB, REST APIs, Express, and GraphQL. My recent completion of the Full Stack Web Development program at the University of Minnesota has equipped me with the latest tools and technologies to become a well-rounded full-stack developer.</p>

          <p>In my spare time, I love to stay active by running, and I also enjoy playing games. I'm excited about the opportunity to bring my skills and experience to a new role as a developer.</p></div>
      </Box>
    </Container>
  );
};

export default AboutMe;

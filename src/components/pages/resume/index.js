//Importing the needed react components to support the resume Page
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// Importing the Resume file so this can be rendered on the page.
import resumePDF from "../../../assets/pdf/Garrett_Resume.pdf";

const styles = {
  downloadLink: {
    fontSize: '20px',
  },
}
const Resume = () => {
  return (
    <Container maxWidth="full" disableGutters={true}>
      <Box sx={{
        textAlign: 'left',
        padding: '10px 10%',
      }}>
        <h2>Resume</h2>
        <div><a href={resumePDF} target="_blank" rel="noreferrer" style={styles.downloadLink}>Download my resume</a></div>
        <div>
          <h3>Front End Proficiencies</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap (CSS Framework)</li>
            <li>Bulma (CSS Framework)</li>
            <li>Material UI (CSS Framework)</li>
            <li>HandlebarsJS</li>
            <li>React</li>
          </ul>
        </div>
        <div>
          <h3>Back End Proficiencies</h3>
          <ul>
            <li>Node.JS</li>
            <li>JavaScript</li>
            <li>MySQL (ORM - Sequialize)</li>
            <li>Mongo DB(ODM - Mongoose)</li>
            <li>REST APIs</li>
            <li>Express</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </Box>
    </Container>
  );
};

export default Resume;

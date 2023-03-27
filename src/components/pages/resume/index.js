import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import resumePDF from "../../../assets/pdf/Garrett_Resume.pdf";

const Resume = () => {
  return (
    <Container>
      <Box>
        <div>Resume Page</div>
        <div><a href={resumePDF} target="_blank" rel="noreferrer">Download my resume</a></div>

        <div>
          <p>Front End Proficiencies</p>
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
          <p>Back End Proficiencies</p>
          <ul>
            <li>nodeJS</li>
            <li>JavaScript</li>
            <li>mySQL (ORM - Sequialize)</li>
            <li>Mongo DB(ODM - Mongoose)</li>
          </ul>
        </div>

        <div>
          <p>Misc Proficiencies</p>
          <ul>
            <li>GraphQL (middleware)</li>
            <li>Express (middleware)</li>
            <li>Jest (Testing)</li>
          </ul>
        </div>

      </Box>
    </Container>
  );
};

export default Resume;

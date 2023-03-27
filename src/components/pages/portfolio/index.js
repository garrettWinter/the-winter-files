import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Portfolio = () => {
  return (
        <Container maxWidth="full" disableGutters={true}>
        <Box>
            <div>This is pulling from the Portfolio Page (Need 6 in total (2 team, 4 Indivudual))</div>
            <div>Team Projects</div>
            <div>
                <p>Project 1</p>
                <div>IMAGE</div>
                <div>Deployed Link, Repo Link</div>
                <div>Tech Used Icons</div>
            </div>
            <div>Indivudual Projects</div>
            <div>
                <p>Project 1</p>
                <div>IMAGE</div>
                <div>Deployed Link, Repo Link</div>
                <div>Tech Used Icons</div>
            </div>
        </Box>
        </Container>
  );
};

export default Portfolio;

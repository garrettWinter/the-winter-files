//Importing the needed react components to support the portfolio Page
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import projectDetails from '../../../projectDetails';
import ProjectCard from '../../projectCard';


const Portfolio = () => {
    return (
        <div>
            <Container sx={{ paddingTop: '15px' }}>
                <Box sx={{ flexgrow: 1 }}>
                    <h2  >Portfolio</h2>
                    <Grid container spacing={2} sx={{justifyContent: 'space-around'}}>
                        {projectDetails.map(projectDetail => (
                            <Grid item xs={12} md={6} lg={4}>
                                <ProjectCard projectDetails={projectDetail} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Portfolio;

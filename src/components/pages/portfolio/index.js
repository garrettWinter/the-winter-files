import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import projectDetails from '../../../projectDetails';
import ProjectCard from '../../projectCard';

const Portfolio = () => {
    return (
        <Container sx={{ paddingTop: '15px'}}>
            <Box sx={{ flexgrow: 1 }}>
                <Grid container spacing={2}>
                    {projectDetails.map(projectDetail => (
                    <Grid item xs={12} md={6}>
                        <ProjectCard projectDetails={projectDetail} />
                    </Grid>
                ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default Portfolio;

import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import projectDetails from '../../../projectDetails';
import ProjectCard from '../../projectCard';


const Portfolio = () => {
    return (
        <div>
            {/* <Container maxWidth="full" disableGutters={true}>
                <Box sx={{
                    textAlign: 'left',
                    padding: '10px 10%',
                }}>
                    <h2  >Portfolio</h2>
                </Box>
            </Container> */}
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

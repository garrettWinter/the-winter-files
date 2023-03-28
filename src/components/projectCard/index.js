import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProjectCard({projectDetails}) {
  return (
    <Card sx={{ tbd: ''}}>
      <CardMedia
        component="img"
        alt={projectDetails.altText}
        title={projectDetails.titleText}
        height="140"
        image={projectDetails.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {projectDetails.projectName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {projectDetails.description}
        </Typography>
      </CardContent>
      <CardActions sx = {{alignItems: 'centered', display: 'flex', justifyContent: 'center' }}>
        <a href={projectDetails.gitHubLink} target="_blank" rel="noreferrer"> <Button variant="contained" size="small">gitHub Repo</Button></a>
        <a href={projectDetails.deployedLink} target="_blank" rel="noreferrer"> <Button variant="contained" size="small">Deployed Link</Button></a>
      </CardActions>
    </Card>
  );
}

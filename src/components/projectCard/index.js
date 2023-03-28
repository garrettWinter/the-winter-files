import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const styles = {
  link: {
    textDecoration: 'none'
  }
}

export default function ProjectCard({projectDetails}) {
  return (
    <Card sx={{ height: '100%' }}>
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
      <CardActions sx = {{ display: 'flex', justifyContent: 'center' }}>
        <a href={projectDetails.gitHubLink} style={styles.link} target="_blank" rel="noreferrer"> <Button variant="contained" size="small">gitHub Repo</Button></a>
        <a href={projectDetails.deployedLink} style={styles.link} target="_blank" rel="noreferrer"> <Button variant="contained" size="small">Deployed Link</Button></a>
      </CardActions>
    </Card>
  );
}

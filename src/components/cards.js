import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import barcelona from '../barcelona.jpeg';

function TravelCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Barcelona City center Lights"
        height="200"
        image={barcelona}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Barcelona   1990 CAD*
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Remove Item</Button>
        <Button size="small">Book Now</Button>
      </CardActions>
    </Card>
  );
}

export default TravelCard;
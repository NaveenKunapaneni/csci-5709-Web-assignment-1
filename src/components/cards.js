import * as React from 'react';
import {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import barcelona from '../barcelona.jpeg';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import './cards.css';


function TravelCard() {
  const [ cardView, setCardView] = useState(true);

const handleDeleteButton = () => {
  (cardView ? setCardView(false) : setCardView(true))
}

const renderCardItems = () => {
  
  return(
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
      <Stack direction="row" spacing={8}>
      <Button className='Delete-Button' 
              onClick={handleDeleteButton} 
              variant="outlined" 
              startIcon={<DeleteIcon />}
              style = { {
                  color : 'red'
              }
              }>
        Delete
      </Button>
      <Button variant="contained">
        Book Now
      </Button>
    </Stack>
      </CardActions>
    </Card>
  );
}

  return cardView ? renderCardItems() : null

}





export default TravelCard;
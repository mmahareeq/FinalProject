import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <h6>Category</h6>
        <h6>Price</h6>
      </CardContent>
      <CardActions>
        <Button size="small"><AddShoppingCartIcon/></Button>
        <Button size="small"><FavoriteIcon/></Button>
      </CardActions>
    </Card>
  );
}
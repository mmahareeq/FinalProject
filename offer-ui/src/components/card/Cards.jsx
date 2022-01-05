import './card.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GroupsIcon from '@mui/icons-material/Groups';
export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }} className = "border-card">
    
      <CardContent className="card-style">
       <span className = "product">Product Name</span>
       <div className ="div-line"></div>
      <img src="https://60cb3c2a9179a3db8288137d--mystifying-mcnulty-544607.netlify.app/images/ali-tarhini-slashio-ThLVnKdeH1k-unsplash.jpg"
       className="image-style"></img>
      </CardContent>
      <div className="information-style font">
      <span className="category">Category : 
      </span>     
     <div className="font container">
     <span className= "price">Price : 20 $</span>
     <span className= "discount">10$</span>
     </div>

      </div>
      <CardActions className="choices-container">
        <Button size="small"><AddShoppingCartIcon style={{ color: '#c7ad9c' }}/></Button>
        <Button size="small"><FavoriteIcon style={{ color: '#c7ad9c' }}/></Button>
        <Button size="small"><GroupsIcon style={{ color: '#c7ad9c' }}/></Button>

      </CardActions>
    </Card>
  );
}
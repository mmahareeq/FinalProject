import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth:300,
    marginLeft:30,
    marginBottom:35
  },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
  btncolor:
  {
    color:'green',
  },
  btn:
  {
    border:'0.1px solid black',
    margin:'auto'

  }
});



export default function Store({info}) {
  const classes = useStyles();
   console.log({info})
   

  return (
  
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {info.attributes.name}
        </Typography>
        <hr/>
        <Typography variant="h5" component="h5">
          {info.attributes.address + '-'+info.attributes.city}
        </Typography>
        <Typography className={classes.pos+' '+ classes.btncolor} >
         Open time:  {info.attributes.openHour + '-' + info.attributes.closeHour}
        </Typography>
        <Typography variant="body2" component="span">
          {info.attributes.phone1}
        
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className={classes.btn}>store info</Button>
      </CardActions>
    </Card>
  );
}
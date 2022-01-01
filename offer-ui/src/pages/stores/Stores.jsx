import React from 'react'
import infoStore from '../../data'
import Store from '../store/Store'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop:30,

    },
    root2:
    {
        marginTop:15,
        
    },
    control: {
      padding: theme.spacing(5),
    },
  }));
export default function Stores() {
    const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container className={classes.root2} xs={12} justifyContent="flex-start" >
          {infoStore.map((value) => (
            <Store info={value}/>
          ))}
        </Grid>
      </Grid>
     
    </Grid>
  );
}
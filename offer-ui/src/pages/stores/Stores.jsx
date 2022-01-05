import React,{useEffect,useState} from 'react'

import Store from '../store/Store'
import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


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
    
    const classes = useStyles();
    
    const [stores,setStore] = useState([])
    
    useEffect(() => {
      async function fetchStores(){
    
        try{
            const res = await axios.get("https://apimena.herokuapp.com/api/stores");
            
            setStore(res.data);
            console.log(stores)
                  
        }catch(ERROR){
          console.error(ERROR);
        }
            
    }
      fetchStores();
      
    },[]);
    
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container className={classes.root2} xs={12} justifyContent="flex-start" >
          { stores.length !==0 ?stores.data.map((value) => (
            <Store info={value} ></Store>
          )):console.log("isloading")}
        </Grid>
      </Grid>
     
    </Grid>
  );
}
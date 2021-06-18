import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Top from '@/components/Index/Top';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

const Index = () => {
    const classes = useStyles();
    return <div> 
                <Top />
                <Grid item xs={12}>
                   <Paper className={classes.paper}>xs=12</Paper>
                </Grid>
                <Grid item xs={6}>
                   <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs={6}>
                   <Paper className={classes.paper}>xs=6</Paper>
                </Grid>    
           </div>
};

export default Index;
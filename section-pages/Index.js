import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Top from '@/components/Index/Top';
import More from '@/components/Index/More';

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
                <More />
           </div>
};

export default Index;
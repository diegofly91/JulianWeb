import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    text:{
      fontSize: 14,
      fontFamily: 'Exo',
      fontWeight: 600,
      marginBottom: 15,
      marginTop: 10
    }
}));

const Paragrapho = (props) => {
    const classes = useStyles();
    const { children } = props;
    return <Typography className={classes.text}>
                {children}
           </Typography>

}

export default Paragrapho;
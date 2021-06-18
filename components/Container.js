import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      paddingTop: 20,
      paddingBottom: 20
    },
}));


export default function ContainerPage(props) {
    const classes = useStyles();
    const { children } = props;
  return <Container maxWidth="md" className={classes.root}>
             { children }
         </Container>
}
import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";


const useStyles = makeStyles((theme) => ({
    root: {
      padding: 0,
      margin: 0,
      maxWidth: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent:'center'
    },
}));


export default function ContainerFull(props) {
    const classes = useStyles();
    const { children, className } = props;
    const headerClasses = classNames({
        [classes.root]: true,
        [className]: className !== undefined
      });
  return <Container className={headerClasses}>
             { children }
         </Container>
}
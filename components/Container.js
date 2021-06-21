import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
    root: {
      paddingTop: 20,
      paddingBottom: 20,
      marginBottom: 20
    },
}));


export default function ContainerPage(props) {
    const classes = useStyles();
    const { children, className } = props;
    const headerClasses = classNames({
      [classes.root]: true,
      [className]: className !== undefined
    });
  return <Container maxWidth="md" className={headerClasses}>
             { children }
         </Container>
}
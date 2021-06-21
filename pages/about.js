import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ContainerPage from '@/components/Container';
import Infancy from '@/section/About/Infancy';
import Education from '@/section/About/Education';
import University from '@/section/About/University';
import Medicine from '@/section/About/Medicine';

const useStyles = makeStyles((theme) => ({
   container:{
    [theme.breakpoints.down('xs')]: {
      padding: 0
     },
   }
}))

export default function About() {
  const classes = useStyles();
  return (
    <ContainerPage className={classes.container}>
        <Infancy />
        <Education />
        <University />
        <Medicine />
    </ContainerPage>
  )
}
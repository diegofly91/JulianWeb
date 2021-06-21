import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Title from '@/components/Globals/Title';

const useStyles = makeStyles((theme) => ({
    containerOne:{
        backgroundColor: theme.palette.primary.main,
        marginTop: 20,
        marginBottom: 20
    },
    title: {
        textAlign:'left',
        "&:before": {
          position: "absolute",
          content: '""',
          bottom: 5,
          minWidth: '100%',
          width: 100,
          height: 15,
          zIndex: -1,
          background: theme.palette.yellow
        },
    },
    divImg:{
        position: 'relative',
        minHeight: 170,
        [theme.breakpoints.down('xs')]: {
            minHeight: 250
        },
    },
    img: {
      width: 'auto',
      height: '100%',
      minHeight: 250,
      position: 'absolute',
      top:'50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      [theme.breakpoints.down('xs')]: {
        minHeight: 270,
        transform: 'translate(-60%, -40%)',

       },
    },
    text:{
      color: 'white',
      fontWeight: 500,
      paddingTop: 20,
      paddingBottom: 20,
      [theme.breakpoints.down('xs')]: {
       paddingLeft: 10,
       paddingBottom: 10
      },
    }
}))  
export default function Medicine() {
  const classes = useStyles();
  return (
    <Grid container spacing={0} >
        <Grid item  container xs={12} md={12}>
            <Title title="Medicina"  className={classes.title}/> 
        </Grid>
       <Grid container item  spacing={2} className={classes.containerOne}>
          <Grid 
              container
              direction="row"
              justify="center"
              alignItems="center"
              className={classes.divImg}
              item 
              xs={12} 
              md={4}
          >
            <img src="about6.png" className={classes.img}/>
          </Grid> 
          <Grid 
            item
            container
            direction="row"
            justify="center"
            alignItems="center" 
            xs={12} 
            md={8}>
            <Typography component="p" variant="body1" className={classes.text}>
                En el año 2001, a la edad de 11 años, tuve que ser operando de una fractura costal izquierda.
                En mis citas con el médico, le hacia muchas preguntas respecto al cuerpo humano y cómo  este funciona, 
                En este momento nació mi pasión y vocación por la medicina.
            </Typography>
          </Grid>
       </Grid>
     </Grid>  
  )
}
import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Title from '@/components/Globals/Title';

const useStyles = makeStyles((theme) => ({
    containerOne:{
        backgroundColor: theme.palette.orange,
        marginTop: 20,
        marginBottom: 20
    },
    containerTwo:{
     backgroundColor: theme.palette.blueMarine,
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
        minHeight: 210,
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
export default function Education() {
  const classes = useStyles();
  return (
    <Grid container spacing={0} >
        <Grid item  container xs={12} md={12}>
            <Title title="Educación"  className={classes.title}/> 
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
            <img src="about3.png" className={classes.img}/>
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
                A los 3 años, por recomendación del pediatra, inició el pre jardín, kinder y los primeros años 
                del colegio en el Divino Salvador.<br />
                A la edad de 8 años, cursando en 2º año de la primaria, las maestras se dieron cuenta, 
                que yo terminaba mis tareas antes que mis compañeros y me distraía. <br/> 
                Por eso, decidieron evaluar mis conocimientos y adelantarme de 2 a 3º año de curso, 
                por esta razón, finalicé mi educación a la edad de 15 años
            </Typography>
          </Grid>
       </Grid>
       <Grid container item  spacing={2} className={classes.containerTwo}>
          <Grid 
              container
              item 
              direction="row"
              justify="center"
              alignItems="center"
              className={classes.divImg}
              xs={12} 
              md={4}
          >
            <img src="about4.png" className={classes.img}/>
          </Grid> 
          <Grid item xs={12} md={8}>
            <Typography component="p" variant="body1" className={classes.text}>
                Gracias que mi mamá, estaba trabajando en el negocio y cuidando a Karen yo me 
                vuelvo un niño muy independiente, tomando el bus para ir al colegio y aprendiendo a cocinar a 
                muy temprana edad. <br/>
                Gracias al contacto social que te enseña el comercio, empecé a implementar mi ingenio 
                para vender cajas, armar paquetes de navidad y vender rompecabezas en la puerta del supermercado. 
                <br/><br/>
                En mi estadía en el Colegio Militar, refuerzo los valores de la responsabilidad y el orden, 
                me instruyó en el instrumento de la trompeta, e integró parte de la Banda Marcial de Guerra.
            </Typography>
          </Grid>
       </Grid>
     </Grid>  
  )
}
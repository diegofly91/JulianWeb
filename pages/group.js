import React from 'react';
import ContainerPage from '@/components/Container';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   paper: {
      fontSize: 40,
      fontWeight: 700,
      color: theme.palette.primary.main,
      position: "relative",
      width: 'auto',
      fontFamily: 'Poppins',
      marginBottom: 20,
      [theme.breakpoints.down('sm')]: {
          fontSize: 30
      },
  },
  text:{
    fonfFamily: 'Poppins',
    fontWeight: 500,
    fontSize: 14,
    maxWidth: 400,
    margin: 'auto' 
  }
}))

export default function Group() {
  const classes = useStyles();
  return <ContainerPage >
             <Typography align="center" className={classes.paper}>
               Grupo Legado
             </Typography>
             <Typography component="p"  className={classes.text}>
               "Piensa global, haz local"
             </Typography>  
             <Typography component="p"  className={classes.text}>
               es una de mis frases de cabecera.
             </Typography>  
             <Typography component="p"  className={classes.text}>
               En el año 2006, comencé con la Distribuidora El legado, empresa que trabaja actualmente en Villavicencio.
             </Typography>  
             <Typography component="p"  className={classes.text}>  
               Ahí comprendí la importancia de desarrollar un modelo de negocios escalable y materializar las ideas.
             </Typography>
             <Typography component="p"  className={classes.text}>  
                La distribuidora fue creciendo a la par de mi carrera como médico especialista.
             </Typography>
             <Typography component="p"  className={classes.text}>  
                Como llanero, siempre aposté al progreso económico y social de mi región.
             </Typography>
             <Typography component="p"  className={classes.text}>  
                Actualmente, estamos apostando al crecimiento del Grupo Legado y su expansión de la región Meta.
             </Typography>
        </ContainerPage>
}
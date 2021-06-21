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
     backgroundColor: theme.palette.primary.main,
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
export default function Infancy() {
  const classes = useStyles();
  return (
    <Grid container spacing={0} >
        <Grid item  container xs={12} md={12}>
            <Title title="Infancia"  className={classes.title}/> 
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
            <img src="about1.png" className={classes.img}/>
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
                Soy el primer hide de Maria de Los Angeles Sanchez y Roberto Córdoba Vazquez.
                Mi mamá es del Departamento del Tolima, mientras que mi papá, 
                es del Departamento de Cundinamarca.<br/>
                Por cosas de la vida, se conocieron en Villavicencio, se establecieron 
                allí y el 11 de septiembre de 1990 en el Hospital Departamental de 
                Villavicencio, llegue a sus vidas.<br/>
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
            <img src="about2.png" className={classes.img}/>
          </Grid> 
          <Grid item xs={12} md={8}>
            <Typography component="p" variant="body1" className={classes.text}>
                Posteriormente,  nosotros vivíamos en ese momento en El Barrio de Villa Julia, 
                que se encuentra en el centro de la ciudad.
                <br/>
                Mi papá era vendedor ambulante de dulces y cigarrillos, en los barrios y discotecas de la ciudad,
                trabajo como celador; mientras que mi mamá se quedaba haciendo tareas del hogar y cuidándome.<br/>
                Luego mi padre pudó ahorrar, con el fin de comprar un lote, en el barrio Mi Llanura, 
                que seria nuestra primera  casa.
                <br />
                En ese entonces mi papá compro un taxi, trabajo temporalmente de taxista, 
                cuando vendió su vehículo, invirtió en un local en el Centro Comercial Villa Julia, 
                y en ese momento, nació mi hermana, Karen Andrea, el 10 de mayo de 1995, dejé de ser hijo único.
            </Typography>
          </Grid>
       </Grid>
     </Grid>  
  )
}
import React from 'react';
import ContainerPage from '@/components/Container';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Title from '@/components/Globals/Title';

const useStyles = makeStyles((theme) => ({
    title: {
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
    text:{
      fonfFamily: 'Poppins',
      fontWeight: 500,
      fontSize: 14,
      maxWidth: 400
    }
}))


export default function Politics() {
  const classes = useStyles();
  return (
    <ContainerPage >
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
            <Grid item xs={12} md={5}>

            </Grid>
            <Grid 
              item 
              xs={12} 
              md={6}
            >
                <Title  title='Políticas Públicas' className={classes.title}/>
                <Typography component="p"  className={classes.text}>
                        La política y su conexión con la población, <br/>
                        siempre ha sido uno de mis intereses.
                </Typography>
                <Typography component="p"  className={classes.text}>
                        En la adolescencia, empecé a militar en un partido político,
                        ahí descubrí mi pasión por dialogar con la gente,
                        pensar en soluciones para mejorar la calidad de
                        vida de los vecinos, de forma rápida e inteligente.
                </Typography>
                <Typography component="p"  className={classes.text}>
                        Por esta razón, me encuentro finalizando 
                        la Maestría en Gestión pública y desarrollo gubernamental 
                        en la Universidad de Buenos Aires, y actualmente cursando
                        el Doctorado en Salud Pública en la Universidad de Ciencias
                        Empresariales y Sociales, mientras transcurría mi residencia
                        en el Hospital General de Agudos "Dr. Ignacio Pirovano"
                        en la Ciudad Autónoma de Buenos Aires.
                </Typography>
            </Grid>
        </Grid>    
    </ContainerPage>
  )
}
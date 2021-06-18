import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    img: {
       padding: 20, 
       width: 300
    },
    backg: {
        width: 275,
        position: 'absolute',
        zIndex: -1,
        top: 0,
        left: 50
    },
    containerImg:{
      margin: 20,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative'
    },
    divPaper: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
    },
    paper: {
        fontSize: 40,
        fontWeight: 700,
        color: theme.palette.primary.main,
        position: "relative",
        width: 'auto',
        "&:before": {
          position: "absolute",
          content: '""',
          bottom: 5,
          minWidth: '100%',
          width: 100,
          height: 20,
          zIndex: -1,
          background: theme.palette.primary.text
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 30,
            margin: 'auto'
        },
    },
}));

const Top = () => {
    const classes = useStyles();
    return <Grid container
                 direction="row"
                 justify="center"
                 alignItems="center"
                 spacing={2}
            > 
                <Grid item xs={12} sm={6} md={6}>
                    <div className={classes.containerImg}>
                        <img src="fondo.png" className={classes.backg} />
                        <img src="julian.png" className={classes.img} />
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Typography  component="p" className={classes.divPaper}>
                        <span className={classes.paper}>
                             Hola soy Julián
                        </span>
                    </Typography>    
                    <Typography  component="p" className={classes.divPaper}>
                        <span className={classes.paper}>
                             Córdoba Sanchez!
                        </span>
                    </Typography>
                    <br />
                    <Typography className={classes.divPaper}>
                         Médico cirujano, especialista en urologia y ecografía.
                    </Typography>
                    <Typography className={classes.divPaper}>
                         Méaestrando Gestión Pública y Doctorando Salud Pública.
                    </Typography>
                </Grid>
           </Grid>
};

export default Top;
import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Title from '@/components/Globals/Title';
import ContainerPage from '@/components/Container';

const useStyles = makeStyles((theme) => ({
    container:{
        marginTop:30
    },
    title: {
        textAlign:'right',
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
    img:{
        width: '80%',
        maxWidth: 500,
        paddingTop: 30,
        paddingBottom: 30
    },
    divImg: {
        position: 'relative',
        "&:before": {
            position: "absolute",
            content: '""',
            top: 0,
            left: -10,
            width: '80%',
            maxWidth: 500,
            height: 'calc(100% - 80px)',
            minHeight: 200,
            maxHeight: '100%',
            zIndex: -1,
            backgroundImage: `url('contact2.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        },
    },
    text:{
        textAlign: 'right',
        fontWeight: 500,
        paddingLeft: 10
    }
}))

const Friends = () => {
    const classes = useStyles();
    return <ContainerPage className={classes.container}> 
                <Grid container spacing={0} >
                        <Grid container item  spacing={0}>
                            <Grid 
                                container
                                item 
                                direction="column"
                                justify="center"
                                alignItems="flex-end"
                                xs={12} 
                                md={5}
                            >
                                <Title title="Seamos amigos"  className={classes.title}/> 
                                <Typography component="p" variant="body1" className={classes.text}>
                                    Intercambiar ideas y conversar es una de mis actividades favoritas,
                                    por eso todas tus consultas u opiniones son bienvenidas.
                                </Typography>
                                
                            </Grid> 
                            <Grid 
                                item
                                container
                                direction="row"
                                justify="center"
                                alignItems="center" 
                                className={classes.divImg}
                                xs={12} 
                                md={7}>
                                  <img src="contact.png" className={classes.img}/>
                                  {/* <img src="contact2.png" className={classes.img} /> */}
                            </Grid>
                        </Grid>
                </Grid>
            </ContainerPage>          
}

export default Friends;
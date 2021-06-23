import React , { useState, useEffect } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ContainerPage  from '@/components/Container';
import Btn from '@/components/Globals/Btn';
import Title from '@/components/Globals/Title';
import { ListSocial } from '@/constants/social';

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
    text:{
        marginBottom: 0,
        paddingLeft: 20,
        fontFamily: 'Exo',
        fontWeight: 600
    },
    cv:{
        marginTop: 20,
        fontWeight: 600
    },
}));

const Top = () => {
    const classes = useStyles();
    const [link, useLink] = useState(null);

    useEffect(() => {
        if(!link){
            ListSocial.map((item)=>{
                if(item.title == 'LinkeInd'){
                    useLink(item.path)
                }
            })
        }
    }, [])
    return <ContainerPage>
                    <Grid container
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
                            <Title title={'Hola soy Julián'}/>
                            <Title title={'Córdoba Sanchez!'}/>
                            <br />
                            <Typography className={classes.text}>
                                Médico cirujano, especialista en urología y ecografía.
                            </Typography>
                            <Typography className={classes.text}>
                                Méaestrando Gestión Pública y Doctorando Salud Pública.
                            </Typography>
                            <Btn href={link} title={'MIRA MI CV'}/>
                            
                        </Grid>
                </Grid>
           </ContainerPage>
};

export default Top;
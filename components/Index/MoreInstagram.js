import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ContainerPage  from '@/components/Container';
import Btn from '@/components/Globals/Btn';
import Title from '@/components/Globals/Title';
import ImageList from '@/components/Globals/ImageList';

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
    textMail:{
      fontSize: 16,
      color: theme.palette.primary.icons
    }
}));

const MoreInstagram = () => {
    const classes = useStyles();
    return <ContainerPage>
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={2}
                    > 
                       
                        <Grid item xs={12} sm={6} md={6}>
                             <Title title={'Ven a mi Instagram'} />
                            <Typography component="p"  className={classes.textMail}>
                                @juliancordobasanchezmedico
                            </Typography>    
                            <br />
                            <Typography>
                               Instagram es mi red social preferida, en este espacio comparto información
                               médica, noticias o información politica y gran parte de mi vida y pasiones.
                            </Typography>
                            <br />
                            <Typography>
                               Te espero en instagram para estar comunicados todos los días.
                            </Typography>
                            <Btn href={'/'} title={'INSTAGRAM'} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <ImageList />
                        </Grid>
                </Grid>
           </ContainerPage>
};

export default MoreInstagram;
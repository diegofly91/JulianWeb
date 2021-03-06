import React, { useState, useEffect } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ContainerPage  from '@/components/Container';
import Btn from '@/components/Globals/Btn';
import Title from '@/components/Globals/Title';
import ImageList from '@/components/Globals/ImageList';
import Paragrapho from '@/components/Globals/Paragrapho';
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
    textMail:{
      fontSize: 14,
      color: theme.palette.primary.icons,
      fontFamily: 'Exo',
      fontWeight: 600
    }
}));

const MoreInstagram = () => {
    const classes = useStyles();
    const [link, useLink] = useState(null);

    useEffect(() => {
        if(!link){
            ListSocial.map((item)=>{
                if(item.title == 'Instagram'){
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
                             <Title title={'Ven a mi Instagram'} />
                            <Typography component="p"  className={classes.textMail}>
                                @juliancordobasanchezmedico
                            </Typography>
                            <Paragrapho>
                               Instagram es mi red social preferida, en este espacio comparto información
                               médica, noticias o información politica y gran parte de mi vida y pasiones.
                            </Paragrapho>
                            <Paragrapho>
                               Te espero en instagram para estar comunicados todos los días.
                            </Paragrapho>
                            <Btn href={link} title={'INSTAGRAM'} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <ImageList />
                        </Grid>
                </Grid>
           </ContainerPage>
};

export default MoreInstagram;
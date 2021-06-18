import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MediaCrad from './MediaCard';
import ContainerFull from '@/components/ContainerFull';
import ContainerPage  from '@/components/Container';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      position: 'relative',
      maxWidth: '100%',
      "&:before": {
        position: "absolute",
        content: '""',
        top: 0,
        minWidth: '100%',
        height: '67%',
        zIndex: -1,
        background: 'linear-gradient(45deg, #345278 60%, #34527860 80%,  #B3C53A 100%)',
      }
    },
    title:{
       color: 'white',
       fontWeight: 600
    },
    text:{
        marginBottom: 0,
        paddingLeft: 20,
    },
}));

const More = () => {
    const classes = useStyles();
    return <ContainerFull 
               className={classes.root}
            >
                <ContainerPage>
                    <Grid 
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid item xs={12} sm={12} md={12}>
                            <Typography  component="h3" variant="h4" align="center" className={classes.title}>
                                Lo más visto
                            </Typography>    
                        </Grid>
                        <Grid item xs={6} sm={4} md={3}>
                            <MediaCrad />
                        </Grid>
                        <Grid item xs={6} sm={4} md={3}>
                            <MediaCrad />
                        </Grid>
                        <Grid item xs={6} sm={4} md={3}>
                            <MediaCrad />
                        </Grid>
                        <Grid item xs={6} sm={4} md={3}>
                            <MediaCrad />
                        </Grid>
                </Grid>
            </ContainerPage>    
          </ContainerFull>
};

export default More;
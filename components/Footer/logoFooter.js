import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display:'flex',
        justifyContent: 'center'
    },
    text:{
        color: theme.palette.green.default,
        fontSize: 70,
        fontFamily: 'Guthen Bloots',
        fontWeight: 400,
        maxWidth: 100,
        textAlign: 'center',
        '&:hover': {
            color: '#FFFFFF'
        }
    },
    textBottom: {
        marginTop: -30
    }
}))

const LogoFooter = () => {
    const classes = useStyles();
    
    return<div className={classes.root}>
            <Link href='/'>
                <a className={classes.text}>
                    <div>
                        Julián
                    </div>
                    <div className={classes.textBottom}>
                        Córdoba
                    </div>
                </a>
            </Link>
          </div> 
}

export default LogoFooter;
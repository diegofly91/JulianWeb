import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    logo:{
        color: theme.palette.primary.icons,
        fontSize: 40,
        paddingLeft: 13,
        fontFamily: 'Guthen Bloots',
        fontWeight: 400,
        '&:hover': {
            color: '#FFFFFF'
        }
    },
}))

const Logo = () => {
    const classes = useStyles();
    return<Link href='/'>
                <a className={classes.logo}>Julián Córdoba</a>
          </Link>
}

export default Logo;
'use strict';
import clsx from 'clsx';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    icon: {
        backgroundColor: theme.palette.primary.text,
        borderRadius: '50%',
        padding: 5,
        margin: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
            backgroundColor: theme.palette.primary.icons
        }
    }
}));

const BtnDrawer = ({ handleDrawerOpen, handleDrawerClose, open }) => {
    const classes = useStyles();
    return  <Link
                className={classes.icon} 
                onClick={open ? handleDrawerClose : handleDrawerOpen} 
                key={'menu'}
            >
                      <MenuIcon color="inherit" />
            </Link>
};

export default BtnDrawer;

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from '@material-ui/core';
import MobileDrawer from '@/components/Header/drawer';


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
    },
    viewMax:{
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-around',  
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'space-between',
            flexGrow:2,
            justifyContent: 'flex-end'
        },
    }
}));

const BtnDrawer = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return <div className={classes.viewMax}>
                <Link
                    className={classes.icon} 
                    onClick={open ? handleDrawerClose : handleDrawerOpen} 
                    key={'menu'}
                >
                        <MenuIcon color="inherit" />
                </Link>
                <MobileDrawer 
                    handleDrawerClose={handleDrawerClose} 
                    open={open}
                />
            </div>
};

export default BtnDrawer;

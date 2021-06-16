import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import Logo from "@/components/Header/logo";
import ListPath from '@/components/Header/listPath';
import SocialList from '@/components/Header/socialList';
import useWindowDimensions from '@/hooks/useDimensions';
import BtnDrawer from '@/components/Header/btnDrawer';
import MobileDrawer from '@/components/Header/drawer';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 5,
        paddingBottom: 5,
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'space-between'
        },
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

const Header = (props) => {
    const { className } = props;
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const { width } = useWindowDimensions();
    const [container,setContainer] = useState();
 
    useEffect(()=>{

        if(width && width > 720){
            setContainer(
                <div className={classes.viewMax}>
                    <ListPath />
                    <SocialList />
                </div>
            );
        }else if(width < 720){
           setContainer(
                <div className={classes.viewMax}>
                    <BtnDrawer 
                    handleDrawerClose={handleDrawerClose} 
                    handleDrawerOpen={handleDrawerOpen}
                    open={open}
                    />
                    <MobileDrawer 
                        handleDrawerClose={handleDrawerClose} 
                        open={open}
                    />
                </div>
           );
        }

    },[width])

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const headerClasses = classNames({
        [classes.root]: true,
        [className]: className !== undefined
    });

    return <div className={headerClasses}>
               <Container className={classes.container}> 
                    <Logo />
                    {container}
              </Container>
           </div>;
};

export default Header;
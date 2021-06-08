import React, { useState } from 'react';
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
        backgroundColor: theme.palette.primary.main
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 0,
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'space-between'
        },
    }
}));

const Header = (props) => {
    const { className } = props;
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const { width } = useWindowDimensions();
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
                    {(width > 720) ?
                                    <>
                                       <ListPath />
                                       <SocialList />
                                    </>:
                                    <>
                                        <BtnDrawer 
                                           handleDrawerClose={handleDrawerClose} 
                                           handleDrawerOpen={handleDrawerOpen}
                                           open={open}
                                        />
                                        <MobileDrawer 
                                            handleDrawerClose={handleDrawerClose} 
                                            open={open}
                                        />
                                    </>
                    }
                   
              </Container>
           </div>;
};

export default Header;
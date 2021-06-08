import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import LogoFooter from '@/components/Footer/logoFooter';
import ListPagesFooter from '@/components/Footer/listPagesFooter';
import ListSocialFooter from '@/components/Footer/listSocialFooter';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        position: 'relative',
        [theme.breakpoints.down('xs')]: {
            paddingBottom: 20
        }
    },
    container: {
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-around',
        width: '100%',
        padding: 10,
        maxWidth: 1200,
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }
    },
    text: {
        color: 'white',
        margin: 'auto',
        width: '100%',
        textAlign:'center',
        padding: 5
    },
    marca: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        color: 'white',
        fontSize: 10,
        '&:hover': {
            color: theme.palette.primary.icons
        }
    },
    icon: {
        fontSize: 10,
        marginRight: 5
    }
}));

const Footer = (props) => {
    const { className } = props;
    const classes = useStyles();
    const headerClasses = classNames({
        [classes.root]: true,
        [className]: className !== undefined
      });
    return <div className={headerClasses}>
               <Container className={classes.container}> 
                   <ListPagesFooter />
                   <LogoFooter /> 
                   <ListSocialFooter />
              </Container>
              <p className={classes.text}> © 2021, Julián Córdoba Sánchez | Todos los derechos reservados</p>
              <a className={classes.marca} href='https://diegofly91.github.io/diegolibreros/' target='_blank'>
                  <GitHubIcon className={classes.icon} />
                   DiegoFLi
              </a>
           </div>;
};

export default Footer;
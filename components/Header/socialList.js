import React from 'react';
import { ListSocial } from '@/constants/social';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    containerIcon: {
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            maxWidth: 200,
            marginTop: 15,
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-around'
        },
    },
    icon: {
        backgroundColor: theme.palette.primary.icons,
        borderRadius: '50%',
        padding: 5,
        margin: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
            backgroundColor: theme.palette.primary.text
        },
        [theme.breakpoints.down('xs')]: {
            margin: 10,
        }
    }
}))

const SocialList = () => {
    const classes = useStyles();
    return  <div className={classes.containerIcon}>
                {ListSocial.map((item, index)=>{
                    return <a className={classes.icon}  href={item.path} target='_blank' key={index}> {item.icon}</a>
                })}
            </div>
}

export default SocialList;
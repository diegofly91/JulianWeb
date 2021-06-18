import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import { ListSocial } from '@/constants/social';

const useStyles = makeStyles((theme) => ({
    containerText: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            flexGrow:1,
            width: '100%',
            marginTop: 10,
            marginBottom: 10,
            padding: 0
        }
      },
      textSocial: {
          color: theme.palette.secondary.main,
          fontSize: 12,
          fontWeight: 400,
          textTransform: 'capitalize',
          padding: 2,
          '&:hover': {
            color: '#FFFFFF'
        }
      },
}))

const ListSocialFooter = () => {
    const classes = useStyles();
    return<ul className={classes.containerText}>
                {ListSocial.map((item, index) => {
                return  <a href={item.path} className={classes.textSocial} key={index}>{item.title}</a>;
                })}
          </ul>
}

export default ListSocialFooter;
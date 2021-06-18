import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import { pagesPath } from '@/constants/pagesPath';

const useStyles = makeStyles((theme) => ({
    containerText: {
        flexGrow: 1,  
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center'
        },
      },
      text: {
          color: theme.palette.primary.text,
          fontSize: 11,
          fontWeight: 600,
          paddingLeft: 15,
          '&:hover': {
            color: '#FFFFFF'
          }
      },
}))

const ListPath = () => {
    const classes = useStyles();
    return<div className={classes.containerText}>
                {pagesPath.map((item, index) => {
                return <Link key={index} href={item.path}>
                            <a className={classes.text}>
                                {item.title}
                            </a>
                        </Link>
                })}
          </div>
}

export default ListPath;
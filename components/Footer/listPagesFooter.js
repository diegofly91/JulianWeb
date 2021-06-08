import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import { pagesPath } from '@/constants/pagesPath';

const useStyles = makeStyles((theme) => ({
    containerText: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexGrow:1,
            width: '100%',
            marginTop: 10,
            marginBottom: 10
        }
      },
      text: {
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

const ListPagesFooter = () => {
    const classes = useStyles();
    return<div className={classes.containerText}>
                {pagesPath.map((item, index) => {
                return <Link href={item.path} key={index}>
                           <a className={classes.text}>{item.title.toLowerCase()}</a>
                        </Link>
                })}
          </div>
}

export default ListPagesFooter;
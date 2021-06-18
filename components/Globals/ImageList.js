import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  img: {
      width: '50%',
      padding: 10
  }
}));


const  ImageList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <img src={'info4.png'} className={classes.img} />
        <img src={'info2.png'} className={classes.img} />
        <img src={'info1.png'} className={classes.img} />
        <img src={'info3.png'} className={classes.img} />
    </div>
  );
}

export default ImageList;

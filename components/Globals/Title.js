import React from 'react';
import classNames from "classnames";
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    divPaper: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    },
    paper: {
        fontSize: 40,
        fontWeight: 700,
        color: theme.palette.primary.main,
        position: "relative",
        width: 'auto',
        fontFamily: 'Poppins',
        "&:before": {
          position: "absolute",
          content: '""',
          bottom: 5,
          minWidth: '100%',
          width: 100,
          height: 15,
          zIndex: -1,
          background: theme.palette.primary.text
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 30,
            margin: 'auto'
        },
    },
}))

const Title = (props) => {
    const { title, className } = props;
    const classes = useStyles();
    const headerClasses = classNames({
        [classes.paper]: true,
        [className]: className !== undefined
      });
    return  <Typography  component="p" className={classes.divPaper}>
                <span className={headerClasses}>
                    {title}
                </span>
            </Typography>
}

export default Title;

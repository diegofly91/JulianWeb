import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    btn:{
        marginTop: 20,
        fontWeight: 600,
        borderRadius: 0,
        paddingLeft: 30,
        paddingRight: 30
    },
}))

const Btn = ({href, title}) => {
    const classes = useStyles();
     
    return  <Button 
                    variant="contained" 
                    color="primary"
                    className={classes.btn}
                    onClick={()=>{
                        window.open(href, "_blank")
                    }}
                >
                    {title}
                </Button>
}

export default Btn;

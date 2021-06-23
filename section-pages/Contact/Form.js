import React from 'react';
import { Grid, Button, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ContainerFull from '@/components/ContainerFull';
import SocialList from '@/components/Header/socialList';
import { useFormik } from 'formik';
import  * as Yup from 'yup'; 

const useStyles = makeStyles((theme) => ({
    containerFull:{
        marginTop:30,
        paddingTop: 20,
        backgroundImage: `url('backgContact.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        justifyContent:'center',
        alignItems:'center'
    },
    container:{
        width: '100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding: 30,
        backgroundColor: theme.palette.primary.main,
        marginBottom: 20,
    },
    textField: {
        background: 'white',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        width: '100%',
        borderRadius: 5,
        '& .MuiFormLabel-root.Mui-focused': {
           background: 'white',
           fontWeight: 600
        },
    },
    textFieldArea: {
        background: 'white',
        minHeight: '70px!important',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        borderRadius: 5,
        '& .MuiFormLabel-root.Mui-focused': {
           background: 'white',
           fontWeight: 600
        },
    },
    btn: {
        marginTop: 20,
        borderRadius: 0,
        color: 'white'
    }
}))

const Form = () => {
    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            name: '',
            mail: '',
            tematic: '',
            description: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                     .required('El Nombre es obligatorio'),
            mail: Yup.string()
                     .email('El correo es obligatorio')
                     .required('El Nombre es obligatorio'),
            tematic: Yup.string()
                     .required('El Nombre es obligatorio'),  
            description: Yup.string()
                     .required('El Nombre es obligatorio'),                         

        }),
        onSubmit: values => {
            console.log(values)
        }
    })

    return <ContainerFull className={classes.containerFull}> 
                <SocialList />
                <Grid item md={8} xs={12} className={classes.container} >
                    <TextField
                        size="medium"
                        required
                        id="name"
                        label="Nombre"
                        variant="outlined"
                        onChange={formik.handleChange}
                        error={(formik.touched.name && formik.errors.name)}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        className={classes.textField}
                        fullWidth
                    />
                    <TextField
                        size="medium"
                        required
                        id="mail"
                        label="Correo"
                        variant="outlined"
                        error={(formik.touched.mail && formik.errors.mail)}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.mail }
                        className={classes.textField}
                        fullWidth
                    />
                    <TextField
                        size="medium"
                        required
                        id="tematic"
                        label="Tematica"
                        variant="outlined"
                        error={(formik.touched.tematic && formik.errors.tematic)}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.tematic }
                        className={classes.textField}
                        fullWidth
                    />
                    <TextField
                        id="description"
                        label="Mensaje"
                        multiline
                        required
                        rows={4}
                        fullWidth
                        error={(formik.touched.description && formik.errors.description)}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.description}
                        className={classes.textFieldArea}
                        variant="outlined"
                    />
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.btn}
                        onClick={async (e) => {
                            e.preventDefault();
                            formik.handleSubmit();
                        }}
                    >
                        Enviar
                    </Button>
                </Grid>    
           </ContainerFull>
}      

export default Form;
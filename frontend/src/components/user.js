import React from 'react';
import { Formik, Form } from 'formik';
import { Button, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import * as Yup from 'yup';

const useStyles = makeStyles(() => ({
    form: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        padding: '20px',
        backgroundColor: '#FFFEFE',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px #000000',
    },
    TextField: {
        paddingTop: '15px'
    }
}));

export default function SubmitLogin() {
    const classes = useStyles();
    
    const initialValues = {
        Email: '',
        Password: '',
    };

    const validationSchema = Yup.object().shape({
        Email: Yup.string().required('Email field is required'),
        Password: Yup.string().required('Password field is required'),
    });

    const handleSubmit = () => {
        alert("Form will be submitted!");
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            validateOnChange={true}
        >
            {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
                <Form className={classes.form} onChange={handleChange} onSubmit={handleSubmit}>
                    <TextField name="Email" label="Email" value={values.Email} style={{ paddingBottom: '10px' }} />
                    <TextField name="Password" label="Password" value={values.Password} style={{ paddingBottom: '10px' }} />
                    <br />
                    <Button 
                        type="submit" variant="contained" color="primary"
                    >
                        Login
                    </Button>
                </Form>
            )}
        </Formik>
    );
}

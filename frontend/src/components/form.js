// creating a form in mui with formik
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import * as Yup from 'yup';

const useStyles = makeStyles(() => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        padding: '20px',
        backgroundColor: '#FFFEFE',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px #000000',
    },
}));

export default function SubmitForm() {
    const classes = useStyles();
    
    const initialValues = {
        field1: '',
        field2: '',
        field3: '',
        field4: '',
    };

    const validationSchema = Yup.object().shape({
        field1: Yup.string().required('field1 is required'),
        field2: Yup.string().required('field2 is required'),
        field3: Yup.string().required('field3 is required'),
        field4: Yup.string().required('field4 Pressure is required'),
    });

   const handleSubmit = () => {
    alert("Form will be submitted!");
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched }) => (
                <Form className={classes.form}>
                    <Field name="field1" label="field1" component={TextField} />
                    <Field name="field2" label="field2" component={TextField} />
                    <Field name="field3" label="field3" component={TextField} />
                    <Field name="field4" label="field4" component={TextField} />
                    <br />
                    <Button type="submit" variant="contained" color="primary">Submit</Button>
                </Form>
            )}
        </Formik>
    );
}

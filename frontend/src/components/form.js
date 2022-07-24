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

export default function SubmitForm() {
    const classes = useStyles();
    
    const initialValues = {
        Age: '',
        Anemia: '',
        CPK: '',
        Diabetes: '',
        Ejection_Fraction: '',
        High_Blood_Pressure: '',
        Platelets:'',
        Serum_Creatinine: '',
        Serum_Sodium:'',
        Sex: '',
    };

    const validationSchema = Yup.object().shape({
        Age: Yup.string().required('Age field is required'),
        Anemia: Yup.string().required('Anemia field is required'),
        CPK: Yup.string().required('CPK field is required'),
        Diabetes: Yup.string().required('DIabetes field is required'),
        Ejection_Fraction: Yup.string().required('Ejection Fraction field is required'),
        High_Blood_Pressure: Yup.string().required('High Blood Pressure field is required'),
        Platelets: Yup.string().required('Platelets field is required'),
        Serum_Creatinine: Yup.string().required('Serum Creatinine field is required'),
        Serum_Sodium: Yup.string().required('Serum Sodium field is required'),
        Sex: Yup.string().required('Sex field is required')
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
                    <TextField name="Age" label="Age" value={values.Age} style={{ paddingBottom: '10px' }}/>
                    <TextField name="Anemia" label="Anemia" value={values.Anemia} style={{ paddingBottom: '10px' }}/>
                    <TextField name="CPK" label="CPK" value={values.CPK} style={{ paddingBottom: '10px' }} />
                    <TextField name="Diabetes" label="Diabetes" value={values.Diabetes} style={{ paddingBottom: '10px' }} />
                    <TextField name="Ejection_Fraction" label="Ejection Fraction" value={values.Ejection_Fraction} style={{ paddingBottom: '10px' }} />
                    <TextField name="High_Blood_Pressure" label="High Blood Pressure" value={values.High_Blood_Pressure} style={{ paddingBottom: '10px' }} />
                    <TextField name="Platelets" label="Platelets" value={values.Platelets} style={{ paddingBottom: '10px' }} />
                    <TextField name="Serum_Creatinine" label="Serum Creatinine" value={values.Serum_Creatinine} style={{ paddingBottom: '10px' }} />
                    <TextField name="Serum_Sodium" label="Serum Sodium" value={values.Serum_Sodium} style={{ paddingBottom: '10px' }}  />
                    <TextField name="Sex" label="Sex" value={values.Sex} style={{ paddingBottom: '10px' }} />
                    <br />
                    <Button 
                        type="submit" variant="contained" color="primary"
                    >
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
    );
}

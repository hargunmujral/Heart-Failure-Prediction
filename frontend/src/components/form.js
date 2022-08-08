import React from 'react';
import { Formik, Form } from 'formik';
import { Button, Checkbox, TextField } from '@mui/material';
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
    TextField: {
        paddingTop: '15px'
    }
}));

export default function SubmitForm() {
    const classes = useStyles();
    
    const initialValues = {
        Patient_Name: '',
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
        Smoking: '',
        Time: '',
    };

    const validationSchema = Yup.object().shape({
        Patient_Name: Yup.string().required('Patient Name field is required'),
        Age: Yup.string().required('Age field is required'),
        Anemia: Yup.boolean(),
        CPK: Yup.string().required('CPK field is required'),
        Diabetes: Yup.boolean(),
        Ejection_Fraction: Yup.string().required('Ejection Fraction field is required'),
        High_Blood_Pressure: Yup.boolean(),
        Platelets: Yup.string().required('Platelets field is required'),
        Serum_Creatinine: Yup.string().required('Serum Creatinine field is required'),
        Serum_Sodium: Yup.string().required('Serum Sodium field is required'),
        Sex: Yup.string().required('Sex field is required'),
        Smoking: Yup.boolean(),
        Time: Yup.string().required('Time field is required')
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
                    <TextField name="Patient_Name" label="Patient Name" style={{ paddingBottom: '10px' }} />
                    <TextField name="Age" label="Age" value={values.Age} style={{ paddingBottom: '10px' }}/>
                    <TextField name="CPK" label="CPK" value={values.CPK} style={{ paddingBottom: '10px' }} />
                    <TextField name="Ejection_Fraction" label="Ejection Fraction" value={values.Ejection_Fraction} style={{ paddingBottom: '10px' }} />
                    <TextField name="Platelets" label="Platelets" value={values.Platelets} style={{ paddingBottom: '10px' }} />
                    <TextField name="Serum_Creatinine" label="Serum Creatinine" value={values.Serum_Creatinine} style={{ paddingBottom: '10px' }} />
                    <TextField name="Serum_Sodium" label="Serum Sodium" value={values.Serum_Sodium} style={{ paddingBottom: '10px' }}  />
                    <TextField name="Time" label="Time" value={values.Time} style={{ paddingBottom: '10px' }} />
                    <label>
                        Diabetes
                        <Checkbox name="Diabetes" value={values.Diabetes} style={{ paddingBottom: '10px' }} />                   
                    </label>
                    <label>
                        High Blood Pressure
                        <Checkbox name="High_Blood_Pressure" value={values.High_Blood_Pressure} style={{ paddingBottom: '10px' }} />
                    </label>
                    <label>
                        Anemia
                        <Checkbox name="Anemia" value={values.Anemia} style={{ paddingBottom: '10px' }}/>
                    </label>
                    <label>
                        Smoking
                        <Checkbox name="Smoking" value={values.Smoking} style={{ paddingBottom: '10px' }}/>
                    </label>
                    <label>
                        Sex
                        <select
                            name="Sex"
                            value={values.Sex}
                            onChange={handleChange}
                            style={{ display: "block" }}
                        >
                            <option value="Male" label="Male">Male</option>
                            <option value="Female" label="Female">Female</option>
                        </select>
                    </label>
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

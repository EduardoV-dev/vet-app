import * as Yup from 'yup';

const validationSchema = Yup.object({
    pet_name: Yup.string()
        .max(50, 'Name too long!')
        .required('Pet name is required!'),
    owner_name: Yup.string()
        .max(50, 'Name too long!')
        .required('Owner name is required!'),
    owner_email: Yup.string()
        .email('Email address is invalid!')
        .required('Email is required!'),
    discharge_date: Yup.date()
        .max(new Date(), "Discharge date can't be further than today!")
        .required('Discharge date is required!'),
    symptoms: Yup.string()
        .min(10, 'Symptoms must be at least 10 characters long!')
        .max(500, 'Symptoms must be at most 500 characters long!')
        .required('Symptoms are required!'),
});

export default validationSchema;

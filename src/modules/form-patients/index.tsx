import { useContext } from 'react';
import { toast } from 'react-toastify';
import { Formik, Form, FormikHelpers } from 'formik';
import { Button, Card, Input } from '../../components';
import { PatientsContext } from '../../context/patients';
import { IPatient } from '../../types/patients';
import validationSchema from './validations';

const FormPatients = (): JSX.Element => {
    /* --- Hooks --- */

    const { savePatients } = useContext(PatientsContext);

    /* --- Handlers --- */

    const handleSubmit = (
        values: IPatient,
        { resetForm, setSubmitting }: FormikHelpers<IPatient>,
    ): void => {
        setSubmitting(true);
        savePatients(values);

        /* Timeout for simulating loading delay */
        const resolveAfter3Seconds = new Promise((res) => {
            setTimeout(() => {
                resetForm();
                setSubmitting(false);

                res(values);
            }, 3000);
        });

        toast.promise(resolveAfter3Seconds, {
            pending: 'Saving patient...',
            success: 'Patient saved successfully!',
        });
    };

    return (
        <section className="grid place-items-center">
            <h2>Patients</h2>
            <h3>
                Add patients & <span className="highlight">Manage them</span>
            </h3>

            <Card>
                <Formik
                    initialValues={{
                        petName: '',
                        ownerName: '',
                        ownerEmail: '',
                        dischargeDate: '',
                        symptoms: '',
                    }}
                    onSubmit={handleSubmit}
                    {...{ validationSchema }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Input
                                label="Pet Name"
                                name="petName"
                                id="petName"
                                placeholder="Enter pet's name"
                            />

                            <Input
                                label="Owner's Name"
                                name="ownerName"
                                id="ownerName"
                                placeholder="Enter owner's name"
                            />

                            <Input
                                label="Owner's Email"
                                name="ownerEmail"
                                id="ownerEmail"
                                type="email"
                                placeholder="Enter owner's email"
                            />

                            <Input
                                label="Discharge Date"
                                name="dischargeDate"
                                id="dischargeDate"
                                data-testid="dischargeDate"
                                type="date"
                            />

                            <Input
                                label="Symptoms"
                                name="symptoms"
                                id="symptoms"
                                type="textarea"
                                placeholder="Describe pet's symptoms"
                            />

                            <Button
                                className="mt-2"
                                color="bluelish"
                                fullWidth
                                type="submit"
                                disabled={isSubmitting}
                            >
                                Add Patient
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Card>
        </section>
    );
};

export default FormPatients;

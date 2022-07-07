import * as React from 'react';
import { toast } from 'react-toastify';
import { Formik, Form, FormikHelpers } from 'formik';
import { PatientsContext } from '../../context/patients';
import { IPatient } from '../../types/patients';
import { Button, Card, Input, SectionContainer } from '../../components';
import validationSchema from './validations';

const FormPatients = (): JSX.Element => {
    /* --- Hooks --- */

    const {
        patients,
        selectedPatientId,
        editPatient,
        savePatient,
        selectPatientId,
    } = React.useContext(PatientsContext);

    /* --- State --- */

    const selectedPatient: IPatient | undefined = patients.find(
        (patient) => patient.id === selectedPatientId,
    );

    /* --- Handlers --- */

    const handleSubmit = (
        values: IPatient,
        { resetForm, setSubmitting }: FormikHelpers<IPatient>,
    ): void => {
        setSubmitting(true);

        selectedPatientId
            ? editPatient(values, selectedPatientId)
            : savePatient(values);

        /* Timeout for simulating loading delay */
        const resolveAfter3Seconds = new Promise((res) => {
            setTimeout(() => {
                resetForm();
                setSubmitting(false);
                selectedPatientId && selectPatientId(null);

                res(values);
            }, 3000);
        });

        toast.promise(resolveAfter3Seconds, {
            pending: 'Saving patient...',
            success: 'Patient saved successfully!',
        });
    };

    return (
        <SectionContainer
            title="Patients"
            subtitle="Add patients &"
            subtitleHightlightedText="Manage them"
        >
            <Card>
                <Formik
                    initialValues={{
                        pet_name: '',
                        owner_name: '',
                        owner_email: '',
                        discharge_date: '',
                        symptoms: '',
                    }}
                    onSubmit={handleSubmit}
                    {...{ validationSchema }}
                >
                    {({ isSubmitting, setFieldValue }) => {
                        /* Effect for mapping every field with the patient data that is about to be editted */

                        React.useEffect(() => {
                            if (!selectedPatientId || !selectedPatient) return;

                            const patientKeys: string[] =
                                Object.keys(selectedPatient);

                            patientKeys.forEach((field) =>
                                setFieldValue(
                                    field,
                                    (selectedPatient as any)[field],
                                    false,
                                ),
                            );
                        }, [selectedPatientId]);

                        return (
                            <Form>
                                <Input
                                    label="Pet Name"
                                    name="pet_name"
                                    id="petName"
                                    placeholder="Enter pet's name"
                                />

                                <Input
                                    label="Owner's Name"
                                    name="owner_name"
                                    id="ownerName"
                                    placeholder="Enter owner's name"
                                />

                                <Input
                                    label="Owner's Email"
                                    name="owner_email"
                                    id="ownerEmail"
                                    type="email"
                                    placeholder="Enter owner's email"
                                />

                                <Input
                                    label="Discharge Date"
                                    name="discharge_date"
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
                                    {selectedPatientId
                                        ? 'Edit Patient'
                                        : 'Add Patient'}
                                </Button>
                            </Form>
                        );
                    }}
                </Formik>
            </Card>
        </SectionContainer>
    );
};

export default FormPatients;

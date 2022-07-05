import { Formik, Form } from 'formik';
import Card from '../../components/card';
import Input from '../../components/input';

const FormPatients = (): JSX.Element => {
    return (
        <section className="grid place-items-center">
            <h2> Seguimiento de Pacientes</h2>
            <h3>
                Añade pacientes y{' '}
                <span className="highlight">Administralos</span>
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
                    onSubmit={(values) => console.log(values)}
                >
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
                            type="date"
                        />

                        <Input
                            label="Symptoms"
                            name="symptoms"
                            id="symptoms"
                            type="textarea"
                            placeholder="Describe pet's symptoms"
                        />

                        <button type="submit">Add Patient</button>
                    </Form>
                </Formik>
            </Card>
        </section>
    );
};

export default FormPatients;

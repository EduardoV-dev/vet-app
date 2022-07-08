import { ToastContainer } from 'react-toastify';
import PatientsProvider from './context/patients';
import FormPatients from './modules/form-patients';
import PatientsList from './modules/patients-list';

const App = (): JSX.Element => {
    return (
        <PatientsProvider>
            <h1>
                Patients Administrator{' '}
                <span className="text-blue-700">Vet</span>
            </h1>

            <main className="grid grid-cols-1 gap-8 mt-14 lg:grid-cols-2">
                <FormPatients />
                <PatientsList />
            </main>

            <ToastContainer />
        </PatientsProvider>
    );
};

export default App;

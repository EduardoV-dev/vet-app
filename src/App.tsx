import { ToastContainer } from 'react-toastify';
import PatientsProvider from './context/patients';
import FormPatients from './modules/form-patients';

const App = (): JSX.Element => {
    return (
        <PatientsProvider>
            <h1>
                Patients Administrator{' '}
                <span className="text-blue-700">Vet</span>
            </h1>

            <main className="grid grid-cols-2 gap-8 mt-14">
                <FormPatients />
            </main>

            <ToastContainer />
        </PatientsProvider>
    );
};

export default App;

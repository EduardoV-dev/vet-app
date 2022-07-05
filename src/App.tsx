import FormPatients from './modules/form-patients';

const App = (): JSX.Element => {
    return (
        <>
            <h1>
                Seguimiento pacientes{' '}
                <span className="text-blue-700">veterinaria</span>
            </h1>

            <main className="grid grid-cols-2 gap-8 mt-14">
                <FormPatients />
            </main>
        </>
    );
};

export default App;

import * as React from 'react';
import uniqid from 'uniqid';
import { IPatient } from '../types/patients';

/** Key used for setting and getting items from localStorage related to patients */
const LS_PATIENTS_KEY = 'vet-patients';

interface IPatientsContext {
    patients: IPatient[];
    savePatients: (patient: IPatient) => void;
}

export const PatientsContext = React.createContext({} as IPatientsContext);

const Provider = (props: { children: React.ReactNode }) => {
    const [patients, setPatients] = React.useState<IPatient[]>(() =>
        /* Gets patients from localStorage, returns [] if no patients are found. */
        JSON.parse(localStorage.getItem(LS_PATIENTS_KEY) || '[]'),
    );

    const savePatients = (patient: IPatient): void =>
        setPatients((prevPatients) => {
            const newPatients: IPatient[] = [
                ...prevPatients,
                { ...patient, id: uniqid() },
            ];

            localStorage.setItem(LS_PATIENTS_KEY, JSON.stringify(newPatients));

            return newPatients;
        });

    const value = {
        patients,
        savePatients,
    };

    return <PatientsContext.Provider {...{ value }} {...props} />;
};

export default Provider;

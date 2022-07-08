import * as React from 'react';
import uniqid from 'uniqid';
import { IPatient } from '../types/patients';

/** Key used for setting and getting items from localStorage related to patients */
const LS_PATIENTS_KEY = 'vet-patients';

interface IPatientsContext {
    patients: IPatient[];
    selectedPatientId: string | null;

    deletePatient: (id: string) => void;
    editPatient: (patient: IPatient, id: string) => void;
    savePatient: (patient: IPatient) => void;
    selectPatientId: (id: string | null) => void;
}

export const PatientsContext = React.createContext({} as IPatientsContext);

/* --- Utils --- */

const saveInLocalStorage = (data: IPatient[]): void =>
    localStorage.setItem(LS_PATIENTS_KEY, JSON.stringify(data));

/* --- Provider Component --- */

const Provider = (props: { children: React.ReactNode }) => {
    /* --- Hooks --- */

    const [selectedPatientId, setSelectedPatientId] =
        React.useState<string | null>(null);
    const [patients, setPatients] = React.useState<IPatient[]>(() =>
        /** Gets patients from localStorage, returns [] if no patients are found. */

        JSON.parse(localStorage.getItem(LS_PATIENTS_KEY) || '[]'),
    );

    /* --- Handlers --- */

    /**
     * Saves a patient by passing its data, saves in localStorage and context state
     * @param patient - patient data
     * @returns {void}
     */
    const savePatient = (patient: IPatient): void =>
        setPatients((prevPatients) => {
            const newPatients: IPatient[] = [
                {
                    ...patient,
                    id: uniqid(),
                },
                ...prevPatients,
            ];

            saveInLocalStorage(newPatients);

            return newPatients;
        });

    /**
     * Deletes a patient register from localStorage and State by passing the id of the patient.
     * @param id - Patient id to be deleted.
     * @returns {void}
     */
    const deletePatient = (id: string): void => {
        if (!confirm('Do you want to delete the patient?')) return;

        setPatients((prevPatients) => {
            const newPatients: IPatient[] = prevPatients.filter(
                (patient) => patient.id !== id,
            );

            saveInLocalStorage(newPatients);

            return newPatients;
        });
    };

    /**
     * Select patient id for mapping the patient data in the form
     * @param id - the id of the patient to select for updating later. If the selected patient
     * id is the same as the one provided in the param will be unselected, else, will be selected.
     * @returns {void}
     */
    const selectPatientId = (id: string | null): void =>
        setSelectedPatientId((selectedId) => (selectedId === id ? null : id));

    /**
     * After selecting the patient id, use this function for editting the selected patient by passing
     * its new data, update happens in localStorage and state
     * @param patient - patient data to be editted
     * @returns
     */
    const editPatient = (patient: IPatient): void => {
        if (!selectedPatientId) return;

        setPatients((prevPatients) => {
            const newPatients: IPatient[] = prevPatients.map((pat) =>
                pat.id === selectedPatientId ? { ...patient } : pat,
            );

            saveInLocalStorage(newPatients);

            return newPatients;
        });
    };

    const value: IPatientsContext = {
        patients,
        selectedPatientId,

        deletePatient,
        editPatient,
        savePatient,
        selectPatientId,
    };

    return <PatientsContext.Provider {...{ value }} {...props} />;
};

export default Provider;

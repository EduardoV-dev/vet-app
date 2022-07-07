import { render, screen } from '@testing-library/react';
import { PatientsContext } from '../../context/patients';
import { IPatient } from '../../types/patients';
import PatientsList from '.';

export const patient: IPatient = {
    discharge_date: '2022-07-06',
    owner_email: 'johndoe@gmail.com',
    owner_name: 'John doe',
    pet_name: 'Odie',
    symptoms: 'Stomach ache detected',
};

describe('<PatientsList />', () => {
    const savePatients = jest.fn();
    const patients: IPatient[] = [patient];

    /** Title is used when the patients in the context doesn't have any register ([]) */
    const DEFAULT_TITLE: string = 'No patients';

    /** Subtitle is used when the patients in the context doesn't have any register ([]) */
    const DEFAULT_SUBTITLE: string = 'Add patients & they will appear here';

    it('Should render with no patients', () => {
        render(
            <PatientsContext.Provider
                value={{
                    deletePatient: jest.fn(),
                    savePatient: savePatients,
                    patients: [],
                }}
            >
                <PatientsList />
            </PatientsContext.Provider>,
        );

        expect(screen.getByRole('heading', { level: 2 }).textContent).toBe(
            DEFAULT_TITLE,
        );
        expect(screen.getByRole('heading', { level: 3 }).textContent).toBe(
            DEFAULT_SUBTITLE,
        );
    });

    it('Should render one patient', () => {
        render(
            <PatientsContext.Provider
                value={{
                    deletePatient: jest.fn(),
                    savePatient: savePatients,
                    patients,
                }}
            >
                <PatientsList />
            </PatientsContext.Provider>,
        );

        expect(screen.getByRole('heading', { level: 2 }).textContent).not.toBe(
            DEFAULT_TITLE,
        );
        expect(screen.getByRole('heading', { level: 3 }).textContent).not.toBe(
            DEFAULT_SUBTITLE,
        );
    });
});

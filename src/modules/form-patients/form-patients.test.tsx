import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { PatientsContext } from '../../context/patients';
import { IPatient } from '../../types/patients';
import FormPatients from '.';

describe('<FormPatients />', () => {
    const savePatient = jest.fn();
    const editPatient = jest.fn();

    let petInput: HTMLElement;
    let ownerNameInput: HTMLElement;
    let ownerEmailInput: HTMLElement;
    let dischargeDateInput: HTMLElement;
    let symptomsInput: HTMLElement;
    let submitButton: HTMLElement;

    const formData: IPatient = {
        pet_name: 'John',
        owner_name: 'Doe',
        owner_email: 'john@doe.com',
        discharge_date: '2022-07-05',
        symptoms: 'Lorem ipsum dolor sit amet',
    };

    /**
     * fills form inputs with the formData
     */
    const fillForm = (): void => {
        fireEvent.change(petInput, {
            target: { value: formData.pet_name },
        });
        fireEvent.change(ownerNameInput, {
            target: { value: formData.owner_name },
        });
        fireEvent.change(ownerEmailInput, {
            target: { value: formData.owner_email },
        });
        fireEvent.change(dischargeDateInput, {
            target: { value: formData.discharge_date },
        });
        fireEvent.change(symptomsInput, {
            target: { value: formData.symptoms },
        });
    };

    beforeEach(() => {
        render(
            <PatientsContext.Provider
                value={{
                    patients: [],
                    selectedPatientId: null,

                    savePatient,
                    selectPatientId: jest.fn(),
                    deletePatient: jest.fn(),
                    editPatient,
                }}
            >
                <FormPatients />
            </PatientsContext.Provider>,
        );

        petInput = screen.getByPlaceholderText(/enter pet's name/i);
        ownerNameInput = screen.getByPlaceholderText(/enter owner's name/i);
        ownerEmailInput = screen.getByPlaceholderText(/enter owner's email/i);
        dischargeDateInput = screen.getByTestId('dischargeDate');
        symptomsInput = screen.getByPlaceholderText(/describe pet's symptoms/i);
        submitButton = screen.getByRole('button', { name: /add patient/i });
    });

    it('Should render correctly with default input values', () => {
        expect((petInput as any).value).toBe('');
        expect((ownerNameInput as any).value).toBe('');
        expect((ownerEmailInput as any).value).toBe('');
        expect((dischargeDateInput as any).value).toBe('');
        expect((symptomsInput as any).value).toBe('');
        expect(submitButton).not.toHaveStyle('opacity: 0.8');
    });

    it('Should fill the form', async () => {
        fillForm();

        expect((petInput as any).value).toBe(formData.pet_name);
        expect((ownerNameInput as any).value).toBe(formData.owner_name);
        expect((ownerEmailInput as any).value).toBe(formData.owner_email);
        expect((dischargeDateInput as any).value).toBe(formData.discharge_date);
        expect((symptomsInput as any).value).toBe(formData.symptoms);
    });

    it('Should not submit the form if all the fields are not satisfied', () => {
        expect((petInput as any).value).toBe('');

        fireEvent.click(submitButton);

        expect(savePatient).not.toHaveBeenCalled();
    });

    it('Should submit the form', async () => {
        fillForm();

        fireEvent.click(submitButton);

        await waitFor(() => expect(savePatient).toHaveBeenCalledWith(formData));
    });
});

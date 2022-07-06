import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FormPatients from '.';
import { PatientsContext } from '../../context/patients';
import { IPatient } from '../../types/patients';

describe('<FormPatients />', () => {
    const savePatients = jest.fn();

    let petInput: HTMLElement;
    let ownerNameInput: HTMLElement;
    let ownerEmailInput: HTMLElement;
    let dischargeDateInput: HTMLElement;
    let symptomsInput: HTMLElement;
    let submitButton: HTMLElement;

    const formData: IPatient = {
        petName: 'John',
        ownerName: 'Doe',
        ownerEmail: 'john@doe.com',
        dischargeDate: '2022-07-05',
        symptoms: 'Lorem ipsum dolor sit amet',
    };

    beforeEach(() => {
        render(
            <PatientsContext.Provider value={{ patients: [], savePatients }}>
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
        const { container } = render(
            <PatientsContext.Provider value={{ patients: [], savePatients }}>
                <FormPatients />
            </PatientsContext.Provider>,
        );

        expect(container).toMatchSnapshot();

        expect((petInput as any).value).toBe('');
        expect((ownerNameInput as any).value).toBe('');
        expect((ownerEmailInput as any).value).toBe('');
        expect((dischargeDateInput as any).value).toBe('');
        expect((symptomsInput as any).value).toBe('');
        expect(submitButton).not.toHaveStyle('opacity: 0.8');
    });

    it('Should fill the form', async () => {
        fireEvent.change(petInput, {
            target: { value: formData.petName },
        });
        fireEvent.change(ownerNameInput, {
            target: { value: formData.ownerName },
        });
        fireEvent.change(ownerEmailInput, {
            target: { value: formData.ownerEmail },
        });
        fireEvent.change(dischargeDateInput, {
            target: { value: formData.dischargeDate },
        });
        fireEvent.change(symptomsInput, {
            target: { value: formData.symptoms },
        });

        expect((petInput as any).value).toBe(formData.petName);
        expect((ownerNameInput as any).value).toBe(formData.ownerName);
        expect((ownerEmailInput as any).value).toBe(formData.ownerEmail);
        expect((dischargeDateInput as any).value).toBe(formData.dischargeDate);
        expect((symptomsInput as any).value).toBe(formData.symptoms);
    });

    it('Should not submit the form if all the fields are not satisfied', () => {
        expect((petInput as any).value).toBe('');

        fireEvent.click(submitButton);

        expect(savePatients).not.toHaveBeenCalled();
    });

    it('Should submit the form', async () => {
        fireEvent.change(petInput, {
            target: { value: formData.petName },
        });
        fireEvent.change(ownerNameInput, {
            target: { value: formData.ownerName },
        });
        fireEvent.change(ownerEmailInput, {
            target: { value: formData.ownerEmail },
        });
        fireEvent.change(dischargeDateInput, {
            target: { value: formData.dischargeDate },
        });
        fireEvent.change(symptomsInput, {
            target: { value: formData.symptoms },
        });

        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(savePatients).toHaveBeenCalledWith(formData);
        });
    });
});

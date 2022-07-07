import { useContext } from 'react';
import { Button } from '../../components';
import { PatientsContext } from '../../context/patients';
import { IPatient } from '../../types/patients';
import { formatDate } from '../../utils/date';

const PatientItem = (patient: IPatient): JSX.Element => {
    /* --- Hooks --- */

    const { deletePatient, selectPatientId } = useContext(PatientsContext);

    /* Handlers */

    const handleDeletePatient = (): void => deletePatient(patient.id!);
    const handleSelectId = (): void => selectPatientId(patient.id!);

    /* Components */

    const PatientDataItems: JSX.Element[] = Object.entries(patient).map(
        ([key, value]) =>
            /* This condition avoids the the id attribute in patients to be rendered */

            key !== 'id' ? (
                <div
                    className="flex gap-2"
                    {...{ key }}
                >
                    <p className="uppercase font-bold flex gap-2 leading-normal">
                        {/* Since attributes use snake case convention, replaces _ for a space */}
                        {key.replace('_', ' ')}:{' '}
                        <span className="font-normal normal-case flex-1">
                            {key === 'discharge_date'
                                ? formatDate(new Date(value))
                                : value}
                        </span>
                    </p>
                </div>
            ) : (
                <></>
            ),
    );

    return (
        <article className="bg-blue-50 p-5 grid gap-3">
            {PatientDataItems}

            <div className="flex justify-between mt-6">
                <Button
                    type="button"
                    color="bluelish"
                    rounded
                    onClick={handleSelectId}
                >
                    Edit
                </Button>
                <Button
                    type="button"
                    color="red"
                    rounded
                    onClick={handleDeletePatient}
                >
                    Delete
                </Button>
            </div>
        </article>
    );
};

export default PatientItem;

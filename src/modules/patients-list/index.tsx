import { useContext } from 'react';
import { animated, config, useTransition } from 'react-spring';
import { Card, SectionContainer } from '../../components';
import { PatientsContext } from '../../context/patients';
import PatientItem from './patient-item';

const PatientsList = (): JSX.Element => {
    /* --- Hooks --- */

    const { patients } = useContext(PatientsContext);

    /* Animations */

    const listingTransition = useTransition(patients, {
        enter: { x: 0, scale: 1, opacity: 1 },
        from: { x: 200, scale: 0.8, opacity: 0 },
        leave: { x: 200, scale: 0.8, opacity: 0 },
        keys: (item) => item.id!,
        config: config.gentle,
    });

    /* --- State --- */

    const title: string = !patients.length ? 'No patients' : 'Patients list';
    const subtitle: string = !patients.length ? 'Add patients' : 'Manage your';
    const subtitleHightlightedText: string = !patients.length
        ? '& they will appear here'
        : 'Patients and their appointments';

    /* --- Components --- */

    const Patients: JSX.Element = listingTransition((style, item) => (
        <animated.div {...{ style }} key={item.id}>
            <PatientItem {...item} />
        </animated.div>
    ));

    return (
        <SectionContainer {...{ title, subtitle, subtitleHightlightedText }}>
            {patients.length > 0 && (
                <Card
                    className="grid grid-cols-1 gap-8 max-h-[605px] overflow-y-auto overflow-x-hidden"
                    style={{ scrollbarWidth: 'thin' }}
                >
                    {Patients}
                </Card>
            )}
        </SectionContainer>
    );
};

export default PatientsList;

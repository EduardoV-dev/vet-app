import App from '../App';
import { render, screen } from '@testing-library/react';

describe('<App />', () => {
    it('Should display "Vet app"', () => {
        render(<App />);
        expect(screen.getByText('Vet app').textContent).toBe('Vet app');
    });
});

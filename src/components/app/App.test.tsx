import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('Given App component', () => {
    render(<App />);

    describe('When it has been render', () => {
        test('Then its child components should be render also with its title', () => {
            const title = screen.getByRole('heading', {
                name: 'Willy Wonka Ice Creams',
            });
            expect(title).toBeInTheDocument();
        });
    });
});

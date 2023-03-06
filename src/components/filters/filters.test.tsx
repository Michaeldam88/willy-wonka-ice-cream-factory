import { fireEvent, render, screen } from '@testing-library/react';
import { Filters } from './filters';


describe('Given a filter component', () => {
    const getIceCreamsMock = jest.fn();        

    beforeEach(() => {        
        render(<Filters getIceCreams={getIceCreamsMock} />);
    });

    describe('When it has been rendered', () => {
        test('Then its should render also with its select', () => {
            expect(screen.getByLabelText('Filter:')).toBeInTheDocument();
            expect(screen.getByLabelText('Sort By:')).toBeInTheDocument();
        });
    });

    describe('When we chose a filter', () => {
        test('Then its should call the function getIceCreams', () => {
            
            const selectInput = screen.getByLabelText('Filter:');

            fireEvent.change(selectInput, {
                target: { value: 'size=large' },
            });

            expect(getIceCreamsMock).toHaveBeenCalled();
        });
    });

    describe('When we chose a sort', () => {
        test('Then its should call the function getIceCreams', () => {
            const selectInput = screen.getByLabelText('Sort By:');

            fireEvent.change(selectInput, {
                target: { value: 'name' },
            });

            expect(getIceCreamsMock).toHaveBeenCalled();
        });
    });
})

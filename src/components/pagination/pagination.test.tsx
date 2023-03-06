import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Pagination } from './pagination';

describe('Given a detail-modal component', () => {
    const setPage = jest.fn();
    const page = 2;
    const totPage = 5;

    beforeEach(() => {
        render(<Pagination page={page} totPage={totPage} setPage={setPage} />);
    });

    describe('When it has been rendered', () => {
        test('Then if we click on previous button it should call the setPage method', () => {
            const previousBtn = screen.getByRole('button', { name: '<' });
            userEvent.click(previousBtn);
            expect(setPage).toHaveBeenCalled();
        });

        test('Then if we click on next button it should call the setPage method', () => {
            const previousBtn = screen.getByRole('button', { name: '>' });
            userEvent.click(previousBtn);
            expect(setPage).toHaveBeenCalled();
        });
    });
});

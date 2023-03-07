import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockIceCream1, mockIceCream2 } from '../../mocks/testing.hookMock';
import { DetailsModal } from './detailsModal';

jest.mock('../../hooks/use.iceCreams', () => ({
    useIceCreams: () => ({
        getIceCreamsDetails: jest.fn(),
        iceCreamDetails: mockIceCream1,
    }),
}));

describe('Given a detail-modal component', () => {
    const setModal = jest.fn();
    const setLiked = jest.fn();
    const id = 'testID';
    const liked = [mockIceCream1];

    beforeEach(() => {
        jest.clearAllMocks();
        render(
            <DetailsModal
                id={id}
                closeModal={setModal}
                liked={liked}
                setLiked={setLiked}
            />
        );
    });

    describe('When it has been rendered', () => {
        test('Then its should render also with its image', () => {
            const img = screen.getByRole('img');
            expect(img).toBeInTheDocument();
        });
    });

    describe('When we click on close button', () => {
        test('Then the setModal function should have been called', () => {
            const closeBtn = screen.getAllByRole('button');
            userEvent.click(closeBtn[1]);
            expect(setModal).toHaveBeenCalled();
        });
    });

    describe('When we have modal with the liked logo on true and we click on like/dislike button', () => {
        test('Then the setLiked function should have been called', () => {
            const btnArray = screen.getAllByRole('button');
            userEvent.click(btnArray[0]);
            expect(setLiked).toHaveBeenCalled();
        });
    });
});

jest.mock('../../hooks/use.iceCreams', () => ({
    useIceCreams: () => ({
        getIceCreamsDetails: jest.fn(),
        iceCreamDetails: mockIceCream2,
    }),
}));

describe('Given a detail-modal component with different details', () => {
    const setModal = jest.fn();
    const setLiked = jest.fn();
    const id = 'testID';
    const liked = [mockIceCream1];

    beforeEach(() => {
        render(
            <DetailsModal
                id={id}
                closeModal={setModal}
                liked={liked}
                setLiked={setLiked}
            />
        );
    });

    describe('When we have modal with the liked logo on false and we click on like/dislike button', () => {
        test('Then the setLiked function should have been called', () => {
            const btnArray = screen.getAllByRole('button');
            userEvent.click(btnArray[0]);
            expect(setLiked).toHaveBeenCalled();
        });
    });
});

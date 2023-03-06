import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockIceCream1, mockIceCream2 } from '../../mocks/testing.hookMock';
import { IceCreamCard } from './iceCreamCard';

describe('Given a detail-modal component', () => {
    const setModal = jest.fn();
    const setLiked = jest.fn();
    const element = mockIceCream1;
    const liked = ['testID'];

    beforeEach(() => {
        render(
            <IceCreamCard
                iceCream={element}
                openModal={setModal}
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

    describe('When we click on the text card', () => {
        test('Then it should call the openModal method', () => {
            const text = screen.getByText('Test1');
            userEvent.click(text);
            expect(setModal).toHaveBeenCalled();
        });
    });

    describe('When we click on the image card', () => {
        test('Then it should call the openModal method', () => {
            const img = screen.getByRole('img');
            userEvent.click(img);
            expect(setModal).toHaveBeenCalled();
        });
    });

    describe('When we have modal with the liked logo on true and we click on like/dislike button', () => {
        test('Then the setLiked function should have been called', () => {
            const likeBtn = screen.getByRole('button');
            userEvent.click(likeBtn);
            expect(setLiked).toHaveBeenCalled();
        });
    });
});

describe('Given a detail-modal component with other deteils', () => {
    const setModal = jest.fn();
    const setLiked = jest.fn();
    const element = mockIceCream2;
    const liked = ['testID'];

    beforeEach(() => {
        render(
            <IceCreamCard
                iceCream={element}
                openModal={setModal}
                liked={liked}
                setLiked={setLiked}
            />
        );
    });

    describe('When we have modal with the liked logo on false and we click on like/dislike button', () => {
        test('Then the setLiked function should have been called', () => {
            const likeBtn = screen.getByRole('button');
            userEvent.click(likeBtn);
            expect(setLiked).toHaveBeenCalled();
        });
    });
});

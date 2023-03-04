import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { IceCreamStructure } from '../../types/icecreamStructure';

export function DetailsModal({
    id,
    closeModal,
}: {
    id: string;
    closeModal: Dispatch<SetStateAction<string | null>>;
}) {
    const mock = {
        id: '08c02278-892c-48b7-a6f7-d0101e330f5d',
        colors: ['#F5DEB3', '#8B4513'],
        description:
            "Get ready for a cookie dough lover's dream with our Cookie Dough Craze ice cream, made with creamy vanilla ice cream, chunks of cookie dough, and loads of chocolate chips. It's a classic combination that will never go out of style. Try it now!",
        ingredients: [
            'vanilla ice cream',
            'chunks of cookie dough',
            'chocolate chips',
        ],
        name: 'Cookie Dough Craze',
        image: '/public/images/ice-3.png',
        size: 'large',
        price: '3.75€',
        onSale: {
            isOnSale: true,
            discount: 0.4,
            finalPrice: '2.25€',
        },
    };

    const liked = ['08c02278-892c-48b7-a6f7-d0101e330f5d'];

    const [details, setDetails] = useState<Partial<IceCreamStructure>>({});

    useEffect(() => {
        setDetails(mock);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClickRemoveLiked = () => {
        //
    };

    const handleClickAddLiked = () => {
        //
    };

    return (
        <div className="details-modal">
            <div className="details-modal__top">
                <h2 className="details-modal__title">{details.name}</h2>

                {liked.some((element) => element === details.id) ? (
                    <button
                        className="iceCream-card__liked details-modal__like"
                        onClick={() => handleClickRemoveLiked()}
                    ></button>
                ) : (
                    <button
                        className="iceCream-card__liked iceCream-card__liked--default details-modal__like"
                        onClick={() => handleClickAddLiked()}
                    ></button>
                )}

                <button
                    className="details-modal__close"
                    onClick={() => {
                        closeModal(null);
                        setDetails({});
                    }}
                >
                    X
                </button>
            </div>
            <img
                className="details-modal__img"
                src={
                    details.image
                        ? `https://heytrade-ice-creams.herokuapp.com${details.image}`
                        : ''
                }
                alt={details.name}
            />

            <h3>Description</h3>
            <p className="details-modal__description">{details.description}</p>

            <h3>Ingredients</h3>
            <ul className="details-modal__ingredients-list">
                {details.ingredients?.map((element) => (
                    <li key={element} className="details-modal__ingredient">
                        <span className="details-modal__ingredient-span">
                            {element}
                        </span>
                    </li>
                ))}
            </ul>

            {details && details.onSale && details.onSale.isOnSale ? (
                <div>
                    <h3>On sale -{details.onSale.discount * 100}%</h3>

                    <span className="details-modal__original-price">
                        {details.price}
                    </span>
                    <span className="details-modal__sale-price">
                        {details.onSale.finalPrice}
                    </span>
                </div>
            ) : (
                <p className="details-modal__price">Price: {details.price}</p>
            )}
        </div>
    );
}

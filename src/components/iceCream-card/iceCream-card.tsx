import { Dispatch, SetStateAction } from 'react';
import { IceCreamStructure } from '../../types/icecreamStructure';

export function IceCreamCard({
    iceCream,
    openModal,
}: {
    iceCream: IceCreamStructure;
    openModal: Dispatch<SetStateAction<string | null>>;
}) {
    const liked = [
        '05f5fe4d-7160-4f61-8139-dd34bf9dac1c',
        '00cf7c9e-34b2-4b64-a4fa-287598d1a6a3',
    ];

    const handleClickRemoveLiked = () => {
        //
    };

    const handleClickAddLiked = () => {
        //
    };

    const availability = iceCream.onSale.isOnSale
        ? iceCream.onSale.finalPrice
        : iceCream.price;

    return (
        <li className="iceCream-card">
            <img
                className="iceCream-card__img"
                onClick={() => {
                    if (iceCream.id) {
                        openModal(iceCream.id);
                    }
                }}
                src={
                    iceCream.image
                        ? `https://heytrade-ice-creams.herokuapp.com${iceCream.image}`
                        : ''
                }
                alt={iceCream.name}
            />

            <div className="iceCream-card__top">
                {iceCream.onSale.isOnSale ? (
                    <span className="iceCream-card__discount">
                        -{iceCream.onSale.discount * 100}%
                    </span>
                ) : null}

                {liked.some((element) => element === iceCream.id) ? (
                    <button
                        className="iceCream-card__liked"
                        onClick={() => handleClickRemoveLiked()}
                    ></button>
                ) : (
                    <button
                        className="iceCream-card__liked iceCream-card__liked--default"
                        onClick={() => handleClickAddLiked()}
                    ></button>
                )}
            </div>

            <div
                className="iceCream-card__bottom"
                onClick={() => {
                    if (iceCream.id) {
                        openModal(iceCream.id);
                    }
                }}
            >
                <h4 className="iceCream-card__title">{iceCream.name}</h4>
                <h2 className="iceCream-card__availability">{availability}</h2>
            </div>
        </li>
    );
}

import { Dispatch, SetStateAction, useEffect } from 'react';
import { useIceCreams } from '../../hooks/use.iceCreams';

export function DetailsModal({
    id,
    closeModal,
}: {
    id: string;
    closeModal: Dispatch<SetStateAction<string | null>>;
}) {
    const { getIceCreamsDetails, iceCreamDetails } = useIceCreams();

    const liked = [
        '05f5fe4d-7160-4f61-8139-dd34bf9dac1c',
        '00cf7c9e-34b2-4b64-a4fa-287598d1a6a3',
    ];

    useEffect(() => {
        getIceCreamsDetails(id);        
    }, [getIceCreamsDetails, id]);

    const handleClickRemoveLiked = () => {
        //
    };

    const handleClickAddLiked = () => {
        //
    };
    
    return (
        <div className="details-modal">
            <div className="details-modal__top">
                <h2 className="details-modal__title">{iceCreamDetails.name}</h2>

                {liked.some((element) => element === iceCreamDetails.id) ? (
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
                    }}
                >
                    X
                </button>
            </div>
            <img
                className="details-modal__img"
                src={
                    iceCreamDetails.image
                        ? `https://heytrade-ice-creams.herokuapp.com${iceCreamDetails.image}`
                        : ''
                }
                alt={iceCreamDetails.name}
            />

            <h3>Description</h3>
            <p className="details-modal__description">
                {iceCreamDetails.description}
            </p>

            <h3>Ingredients</h3>
            <ul className="details-modal__ingredients-list">
                {iceCreamDetails.ingredients?.map((element) => (
                    <li key={element} className="details-modal__ingredient">
                        <span className="details-modal__ingredient-span">
                            {element}
                        </span>
                    </li>
                ))}
            </ul>

            {iceCreamDetails &&
            iceCreamDetails.onSale &&
            iceCreamDetails.onSale.isOnSale ? (
                <div>
                    <h3>On sale -{iceCreamDetails.onSale.discount * 100}%</h3>

                    <span className="details-modal__original-price">
                        {iceCreamDetails.price}
                    </span>
                    <span className="details-modal__sale-price">
                        {iceCreamDetails.onSale.finalPrice}
                    </span>
                </div>
            ) : (
                <p className="details-modal__price">
                    Price: {iceCreamDetails.price}
                </p>
            )}
        </div>
    );
}

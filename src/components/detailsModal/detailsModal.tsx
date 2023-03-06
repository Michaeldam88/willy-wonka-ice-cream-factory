import { Dispatch, SetStateAction, useEffect } from 'react';
import { useIceCreams } from '../../hooks/use.iceCreams';
import { useLocalStorage } from '../../hooks/use.LocalStorage';
import { Spinner } from '../spinner/spinner';

export function DetailsModal({
    id,
    closeModal,
    liked,
    setLiked,    
}: {
    id: string;
    closeModal: Dispatch<SetStateAction<string | null>>;
    liked: string[];
    setLiked: React.Dispatch<React.SetStateAction<string[]>>;    
}) {
    const { getIceCreamsDetails, iceCreamDetails, loadingDetails } =
        useIceCreams();
    const { setItem } = useLocalStorage();

    useEffect(() => {
        getIceCreamsDetails(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClickRemoveLiked = () => {
        const newList = liked.filter((element) => element !== id);
        setItem('liked', JSON.stringify(newList));
        setLiked(newList);
    };

    const handleClickAddLiked = () => {
        const newList = liked;
        newList.push(id);
        setLiked(newList);
        setItem('liked', JSON.stringify(liked));
    };
    
    if (loadingDetails) {
        return <div className="details-modal"> <Spinner/> </div>;
    }

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

            <h3 className="details-modal__sub-title">Description</h3>
            <p className="details-modal__description">
                {iceCreamDetails.description}
            </p>

            <h3 className="details-modal__sub-title">Ingredients</h3>
            <ul className="details-modal__ingredients-list">
                {iceCreamDetails.ingredients?.map((element) => (
                    <li key={element} className="details-modal__ingredient">
                        {element}
                    </li>
                ))}
            </ul>

            {iceCreamDetails &&
            iceCreamDetails.onSale &&
            iceCreamDetails.onSale.isOnSale ? (
                <div>
                    <h3 className="details-modal__sub-title">
                        On sale -{iceCreamDetails.onSale.discount * 100}%
                    </h3>

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

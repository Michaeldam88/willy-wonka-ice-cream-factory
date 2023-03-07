import { Dispatch, SetStateAction, useEffect } from 'react';
import { useLocalStorage } from '../../hooks/use.LocalStorage';
import { IceCreamStructure } from '../../types/icecreamStructure';

export function IceCreamCard({
    iceCream,
    openModal,
    liked,
    setLiked,
}: {
    iceCream: IceCreamStructure;
    openModal: Dispatch<SetStateAction<string | null>>;
    liked: IceCreamStructure[];
    setLiked: React.Dispatch<React.SetStateAction<IceCreamStructure[]>>;
}) {
    const { setItem, getItem } = useLocalStorage();

    useEffect(() => {
        const storedInfo = getItem('liked');
        if (storedInfo) setLiked(JSON.parse(storedInfo));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClickRemoveLiked = () => {
        const newList = liked.filter((element) => element.id !== iceCream.id);
        setItem('liked', JSON.stringify(newList));
        setLiked(newList);
    };

    const handleClickAddLiked = () => {       
        const newList = liked;
        newList.push(iceCream);
        setLiked(newList);
        setItem('liked', JSON.stringify(liked));
    };

    const price = iceCream.onSale.isOnSale
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

                {liked.some((element) => element.id === iceCream.id) ? (
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
                    openModal(iceCream.id);
                }}
            >
                <h4 className="iceCream-card__title">{iceCream.name}</h4>
                <h2 className="iceCream-card__availability">{`${price}€`}</h2>
            </div>
        </li>
    );
}

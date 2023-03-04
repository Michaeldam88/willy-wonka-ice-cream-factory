import { useState } from 'react';
import { DetailsModal } from '../components/details-modal/details-modal';
import { IceCreamCard } from '../components/iceCream-card/iceCream-card';

export default function Home() {
    const iceCreamList = [
        {
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
        },
        {
            id: '08c02278-892c-48b7-a6f7-d0101e3330f5d',
            colors: ['#F5DEB3', '#8B4513'],
            description:
                "Get ready for a cookie dough lover's dream with our Cookie Dough Craze ice cream, made with creamy vanilla ice cream, chunks of cookie dough, and loads of chocolate chips. It's a classic combination that will never go out of style. Try it now!",
            ingredients: [
                'vanilla ice cream',
                'chunks of cookie dough',
                'chocolate chips',
            ],
            name: 'Cookie Dough Craze derfer',
            image: '/public/images/ice-3.png',
            size: 'large',
            price: '3.75€',
            onSale: {
                isOnSale: false,
                discount: 0.4,
                finalPrice: '2.25€',
            },
        },
        {
            id: '08c02278-892c-48b7-a6f7-d0101e330f5d',
            colors: ['#F5DEB3', '#8B4513'],
            description:
                "Get ready for a cookie dough lover's dream with our Cookie Dough Craze ice cream, made with creamy vanilla ice cream, chunks of cookie dough, and loads of chocolate chips. It's a classic combination that will never go out of style. Try it now!",
            ingredients: [
                'vanilla ice cream',
                'chunks of cookie dough',
                'chocolate chips',
            ],
            name: 'Cookie Dough',
            image: '/public/images/ice-3.png',
            size: 'large',
            price: '3.75€',
            onSale: {
                isOnSale: true,
                discount: 0.4,
                finalPrice: '2.25€',
            },
        },
        {
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
                isOnSale: false,
                discount: 0.4,
                finalPrice: '2.25€',
            },
        },
        {
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
        },
        {
            id: '08c02278-892c-48b7a6f7-d0101e330f5d',
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
        },
    ];

    const [modal, SetModal] = useState<string | null>('');

    return (
        <main className="home">
            <div className="container flex-column">
                {iceCreamList.length > 0 ? (
                    <ul className="iceCreams-list">
                        {iceCreamList.map((element) => (
                            <IceCreamCard
                                key={element.id}
                                iceCream={element}
                                openModal={SetModal}
                            />
                        ))}
                    </ul>
                ) : (
                    <p className="home__no-results">Sin resultados</p>
                )}

                {modal !== null ? (
                    <div className="modal">
                        <DetailsModal
                            id={modal}
                            closeModal={SetModal}
                        ></DetailsModal>
                    </div>
                ) : null}
            </div>
        </main>
    );
}

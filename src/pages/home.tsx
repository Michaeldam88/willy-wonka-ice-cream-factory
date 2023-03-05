import { useEffect, useState } from 'react';
import { DetailsModal } from '../components/details-modal/details-modal';
import { Filters } from '../components/filters/filters';
import { IceCreamCard } from '../components/iceCream-card/iceCream-card';
import { useIceCreams } from '../hooks/use.iceCreams';

export default function Home() {
    const { getIceCreams, iceCreams, getFilteredIceCreams } = useIceCreams();

    const [page, SetPage] = useState<number>(1);

    useEffect(() => {
        getIceCreams(1);
    }, [getIceCreams]);

    const [modal, SetModal] = useState<string | null>(null);

    const activeSearch = (filter:string, sort:string) =>{
        getFilteredIceCreams(page, filter, sort);
    }

    return (
        <main className="home">
            <div className="container flex-column">
                <Filters activeSearch={activeSearch} />
                {iceCreams.length > 0 ? (
                    <ul className="iceCreams-list">
                        {iceCreams.map((element) => (
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

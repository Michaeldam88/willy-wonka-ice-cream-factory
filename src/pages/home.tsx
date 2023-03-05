import { useEffect, useState } from 'react';
import { DetailsModal } from '../components/details-modal/details-modal';
import { Filters } from '../components/filters/filters';
import { IceCreamCard } from '../components/iceCream-card/iceCream-card';
import { Pagination } from '../components/pagination/pagination';
import { useIceCreams } from '../hooks/use.iceCreams';

export default function Home() {
    const { getIceCreams, iceCreams, totPage, page, setPage } = useIceCreams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);

    const [modal, SetModal] = useState<string | null>(null);
    return (
        <main className="home">
            <div className="container flex-column">
                <Filters getIceCreams={getIceCreams} />
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

                <Pagination
                    page={page}
                    totPage={totPage}
                    setPage={setPage}
                ></Pagination>

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

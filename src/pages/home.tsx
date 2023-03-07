import { useEffect, useState } from 'react';
import { DetailsModal } from '../components/detailsModal/detailsModal';
import { Filters } from '../components/filters/filters';
import { IceCreamCard } from '../components/iceCreamCard/iceCreamCard';
import { Pagination } from '../components/pagination/pagination';
import { Spinner } from '../components/spinner/spinner';
import { useIceCreams } from '../hooks/use.iceCreams';
import { IceCreamStructure } from '../types/icecreamStructure';

export function Home() {
    const { getIceCreams, iceCreams, totPage, page, setPage, loadingPage } =
        useIceCreams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);

    const [modal, setModal] = useState<string | null>(null);
    const [liked, setLiked] = useState<IceCreamStructure[]>([]);

    return (
        <main className="home">
            <div className="container flex-column">
                <Filters getIceCreams={getIceCreams} />

                {loadingPage ? (
                    <Spinner />
                ) : (
                    <ul className="iceCreams-list">
                        {iceCreams.map((element) => (
                            <IceCreamCard
                                key={element.id}
                                iceCream={element}
                                openModal={setModal}
                                liked={liked}
                                setLiked={setLiked}
                            />
                        ))}
                    </ul>
                )}

                {!loadingPage && iceCreams.length === 0 && (
                    <p className="home__no-results">Sin resultados</p>
                )}

                {!loadingPage ? (
                    <Pagination
                        page={page}
                        totPage={totPage}
                        setPage={setPage}
                    ></Pagination>
                ) : null}

                {modal ? (
                    <div className="modal">
                        <DetailsModal
                            id={modal}
                            closeModal={setModal}
                            liked={liked}
                            setLiked={setLiked}
                        ></DetailsModal>
                    </div>
                ) : null}
            </div>
        </main>
    );
}

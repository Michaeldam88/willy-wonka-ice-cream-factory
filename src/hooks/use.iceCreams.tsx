import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { IceCreamsApi } from '../services/iceCreamsApi';
import { IceCreamStructure } from '../types/icecreamStructure';

export type UseIceCreams = {
    iceCreams: Array<IceCreamStructure>;
    totItems: number;
    totPage: number;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    iceCreamDetails: Partial<IceCreamStructure>;
    getIceCreams: (page: number, filter: string, sort: string) => Promise<void>;
    getIceCreamsDetails: (id: string) => Promise<void>;
    loadingPage: boolean;
    loadingDetails: boolean;
};

export function useIceCreams(): UseIceCreams {
    const iceCreamsApi = useMemo(() => new IceCreamsApi(), []);

    const [iceCreams, setIceCreams] = useState([]);
    const [iceCreamDetails, setIceCreamDetails] = useState({});
    const [page, setPage] = useState(1);
    const [totPage, setTotalPage] = useState(1);
    const [totItems, setTotalItems] = useState(0);
    const [loadingPage, setLoadingPage] = useState(false);
    const [loadingDetails, setLoadingDetails] = useState(false);

    const filter = useRef('');
    const sort = useRef('');

    const getIceCreams = useCallback(
        async (page: number, receivedFilter: string, receivedSort: string) => {
            try {
                filter.current = receivedFilter;
                sort.current = receivedSort;
                setLoadingPage(true);
                const response = await iceCreamsApi.getIceCreams(
                    page,
                    receivedFilter,
                    receivedSort
                );
                setPage(page);
                setIceCreams(response.data);
                setTotalItems(response.totalItems);
                setTotalPage(response.totalPages);
                setLoadingPage(false);
            } catch (error) {}
        },
        [iceCreamsApi]
    );

    const getIceCreamsDetails = useCallback(
        async (id: string) => {
            try {
                setLoadingDetails(true);
                const response = await iceCreamsApi.getIceCreamsDetails(id);
                setIceCreamDetails(response);
                setLoadingDetails(false);
            } catch (error) {}
        },
        [iceCreamsApi]
    );

    useEffect(() => {
        getIceCreams(page, filter.current, sort.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    return {
        getIceCreams,
        getIceCreamsDetails,
        setPage,
        iceCreams,
        totItems,
        totPage,
        iceCreamDetails,
        page,
        loadingPage,
        loadingDetails,
    };
}

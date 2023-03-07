import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { mockIceCream1 } from '../mocks/testing.hookMock';
import { IceCreamsApi } from '../services/iceCreamsApi';
import { IceCreamStructure } from '../types/icecreamStructure';
import { useLocalStorage } from './use.LocalStorage';

export type UseIceCreams = {
    iceCreams: Array<IceCreamStructure>;
    totPage: number;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    iceCreamDetails: IceCreamStructure;
    getIceCreams: (page: number, filter: string, sort: string) => Promise<void>;
    getIceCreamsDetails: (id: string) => Promise<void>;
    loadingPage: boolean;
    loadingDetails: boolean;
};

export function useIceCreams(): UseIceCreams {
    const iceCreamsApi = useMemo(() => new IceCreamsApi(), []);

    const [iceCreams, setIceCreams] = useState([]);
    const [iceCreamDetails, setIceCreamDetails] = useState(mockIceCream1);
    const [page, setPage] = useState(1);
    const [totPage, setTotalPage] = useState(1);
    const [loadingPage, setLoadingPage] = useState(false);
    const [loadingDetails, setLoadingDetails] = useState(false);

    const filter = useRef('');
    const sort = useRef('');

    const { getItem } = useLocalStorage();

    const getLikedIceCreams = (page: number) => {
        const storedInfo = getItem('liked');

        if (storedInfo && JSON.parse(storedInfo).length > 0) {
            const iceCreamList = JSON.parse(storedInfo);   
            console.log(iceCreamList);         
            setPage(page);
            setIceCreams(
                iceCreamList.slice((page - 1) * 10, page * 10)
            );
            setTotalPage(Math.ceil(iceCreamList.length / 10));
            return;
        }
        setPage(page);
        setIceCreams([]);
        setTotalPage(0);
    };

    const getIceCreams = useCallback(
        async (page: number, receivedFilter: string, receivedSort: string) => {
            try {
                filter.current = receivedFilter;
                sort.current = receivedSort;

                if (receivedFilter === 'liked') {
                    getLikedIceCreams(page);
                    return;
                }

                setLoadingPage(true);
                const response = await iceCreamsApi.getIceCreams(
                    page,
                    receivedFilter,
                    receivedSort
                );
                setPage(page);
                setIceCreams(response.data);
                setTotalPage(response.totalPages);
                setTimeout(() => setLoadingPage(false), 500);
            } catch (error) {}
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [getLikedIceCreams]
    );

    const getIceCreamsDetails = useCallback(
        async (id: string) => {
            try {
                setLoadingDetails(true);
                const response = await iceCreamsApi.getIceCreamsDetails(id);
                setIceCreamDetails(response);
                setTimeout(() => setLoadingDetails(false), 500);                
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
        totPage,
        iceCreamDetails,
        page,
        loadingPage,
        loadingDetails,
    };
}

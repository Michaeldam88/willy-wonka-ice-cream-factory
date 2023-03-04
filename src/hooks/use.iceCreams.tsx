import { useCallback, useMemo, useState } from 'react';
import { IceCreamsApi } from '../services/iceCreamsApi';
import { IceCreamStructure } from '../types/icecreamStructure';

export type UseIceCreams = {
    iceCreams: Array<IceCreamStructure>;
    page: number;
    totItems: number;
    totPage: number;
    getIceCreams: (page: number) => Promise<void>;
    getOnSaleProducts: (page: number) => Promise<void>;
    sortByName: (page: number) => Promise<void>;
    sortByPrice: (page: number) => Promise<void>;
    setPage: React.Dispatch<React.SetStateAction<number>>;
};

export function useIceCreams(): UseIceCreams {
    const iceCreamsApi = useMemo(() => new IceCreamsApi(), []);

    const [iceCreams, setIceCreams] = useState([]);
    const [page, setPage] = useState(1);
    const [totPage, setTotalPage] = useState(1);
    const [totItems, setTotalItems] = useState(0);

    const getIceCreams = useCallback(
        async (page: number) => {
            try {
                const response = await iceCreamsApi.getIceCreams(page);
                setIceCreams(response.data);
                setTotalItems(response.totalItems);
                setTotalPage(response.totalPages);
            } catch (error) {}
        },
        [iceCreamsApi]
    );

    const getOnSaleProducts = useCallback(
        async (page: number) => {
            try {
                const response = await iceCreamsApi.getOnSaleProducts(page);
                setIceCreams(response.data);
                setTotalItems(response.totalItems);
                setTotalPage(response.totalPages);
            } catch (error) {}
        },
        [iceCreamsApi]
    );

    const sortByName = useCallback(
        async (page: number) => {
            try {
                const response = await iceCreamsApi.sortByName(page);
                setIceCreams(response.data);
                setTotalItems(response.totalItems);
                setTotalPage(response.totalPages);
            } catch (error) {}
        },
        [iceCreamsApi]
    );

    const sortByPrice = useCallback(
        async (page: number) => {
            try {
                const response = await iceCreamsApi.sortByPrice(page);
                setIceCreams(response.data);
                setTotalItems(response.totalItems);
                setTotalPage(response.totalPages);
            } catch (error) {}
        },
        [iceCreamsApi]
    );

    return {
        getIceCreams,
        getOnSaleProducts,
        setPage,
        sortByName,
        sortByPrice,
        iceCreams,
        page,
        totItems,
        totPage,
    };
}

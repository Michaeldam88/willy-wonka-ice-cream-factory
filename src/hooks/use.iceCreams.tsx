import { useCallback, useMemo, useState } from 'react';
import { IceCreamsApi } from '../services/iceCreamsApi';
import { IceCreamStructure } from '../types/icecreamStructure';

export type UseIceCreams = {
    iceCreams: Array<IceCreamStructure>;
    page: number;
    totItems: number;
    totPage: number;
    iceCreamDetails: Partial<IceCreamStructure>;
    getIceCreams: (page: number) => Promise<void>;
    getFilteredIceCreams: (
        page: number,
        filter: string,
        sort: string
    ) => Promise<void>;
    getIceCreamsDetails: (id: string) => Promise<void>;
    setPage: React.Dispatch<React.SetStateAction<number>>;
};

export function useIceCreams(): UseIceCreams {
    const iceCreamsApi = useMemo(() => new IceCreamsApi(), []);

    const [iceCreams, setIceCreams] = useState([]);
    const [iceCreamDetails, setIceCreamDetails] = useState({});
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

    const getFilteredIceCreams = useCallback(
        async (page: number, filter:string,sort:string) => {
            try {
                const response = await iceCreamsApi.getFilteredIceCreams(
                    page,
                    filter,
                    sort
                );
                setIceCreams(response.data);
                setTotalItems(response.totalItems);
                setTotalPage(response.totalPages);
            } catch (error) {}
        },
        [iceCreamsApi]
    );

    const getIceCreamsDetails = useCallback(
        async (id: string) => {
            try {
                const response = await iceCreamsApi.getIceCreamsDetails(id);
                setIceCreamDetails(response);                
            } catch (error) {}
        },
        [iceCreamsApi]
    );

    

    return {
        getIceCreams,
        getFilteredIceCreams,
        getIceCreamsDetails,
        setPage,
        iceCreams,
        page,
        totItems,
        totPage,
        iceCreamDetails
    };
}

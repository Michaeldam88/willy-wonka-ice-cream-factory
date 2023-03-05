import { useEffect, useState } from 'react';

export function Filters({
    getIceCreams,
}: {
    getIceCreams: (page: number, filter: string, sort: string) => void;
}) {
    const [selectedSort, setSelectedSort] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('');

    useEffect(() => {
        getIceCreams(1, selectedFilter, selectedSort);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedSort, selectedFilter]);

    return (
        <div className="filters">
            <label className="filters__label">
                Filter:
                <select
                    className="filters__filter"
                    name="filter"
                    id="filter"
                    defaultValue="all"
                    onChange={(e) => setSelectedFilter(e.target.value)}
                >
                    <option value="">All</option>
                    <option value="liked">Liked</option>
                    <option value="onSale=true">On sale</option>
                </select>
            </label>

            <label className="filters__label">
                Sort By:
                <select
                    className="filters__sort"
                    name="order"
                    id="order"
                    defaultValue="top-sale"
                    onChange={(e) => setSelectedSort(e.target.value)}
                >
                    <option value="">Top sale</option>
                    <option value="name">Name</option>
                    <option value="price">Lower Price</option>
                </select>
            </label>
        </div>
    );
}

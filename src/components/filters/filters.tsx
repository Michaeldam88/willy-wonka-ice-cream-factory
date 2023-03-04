import { useState } from 'react';

export function Filters() {
    const [selectedSort, setSelectedSort] = useState('top-sale');
    const [selectedFilter, setSelectedFilter] = useState('all');

    return (
        <div className="filters">
            <label className="filters__label">
                Sort By:
                <select
                    className="filters__sort"
                    name="order"
                    id="order"
                    defaultValue="top-sale"
                    onChange={(e) => setSelectedSort(e.target.value)}
                >
                    <option value="top-sale">Top sale</option>
                    <option value="name">Name</option>
                    <option value="low-price">Lower Price</option>
                </select>
            </label>

            <label className="filters__label">
                Filter:
                <select
                    className="filters__filter"
                    name="filter"
                    id="filter"
                    defaultValue="all"
                    onChange={(e) => setSelectedFilter(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="liked">Liked</option>
                    <option value="on-sale">On sale</option>
                </select>
            </label>
        </div>
    );
}

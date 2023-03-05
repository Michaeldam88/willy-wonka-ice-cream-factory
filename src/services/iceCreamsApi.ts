export class IceCreamsApi {
    async getIceCreams(page: number) {
        const result = await fetch(
            `https://heytrade-ice-creams.herokuapp.com/api/v1/icecreams?_page=${page}`
        );

        if (!result.ok)
            throw new Error(`Error ${result.status}: ${result.statusText}`);

        return result.json();
    }

    async getFilteredIceCreams(page: number, filter: string, sort: string) {
        let url = `https://heytrade-ice-creams.herokuapp.com/api/v1/icecreams?_page=${page}`;
        if (filter && filter !== 'liked') url += '&' + filter;
        if (sort) url += '&_sort=' + sort;
        console.log(url);
        const result = await fetch(url);

        if (!result.ok)
            throw new Error(`Error ${result.status}: ${result.statusText}`);

        return result.json();
    }
}

export class IceCreamsApi {

    async getIceCreams(page: number, filter: string, sort: string) {
        let url = `https://heytrade-ice-creams.herokuapp.com/api/v1/icecreams?_page=${page}`;
        if (filter && filter !== 'liked') url += '&' + filter;
        if (sort) url += '&_sort=' + sort;
        const result = await fetch(url);        
        if (!result.ok)
            throw new Error(`Error ${result.status}: ${result.statusText}`);

        return result.json();
    }

    async getIceCreamsDetails(id: string) {
        const result = await fetch(
            `https://heytrade-ice-creams.herokuapp.com/api/v1/icecreams/${id}`
        );

        if (!result.ok)
            throw new Error(`Error ${result.status}: ${result.statusText}`);

        return result.json();
    }
}

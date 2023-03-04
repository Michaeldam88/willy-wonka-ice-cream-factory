export class IceCreamsApi {
    async getIceCreams(page: number) {
        const result = await fetch(
            `https://heytrade-ice-creams.herokuapp.com/api/v1/icecreams?_page=${page}`
        );

        if (!result.ok)
            throw new Error(`Error ${result.status}: ${result.statusText}`);

        return result.json();
    }

    async getOnSaleProducts(page: number) {
        const result = await fetch(
            `https://heytrade-ice-creams.herokuapp.com/api/v1/icecreams?onSale=true&_page=${page}`
        );

        if (!result.ok)
            throw new Error(`Error ${result.status}: ${result.statusText}`);

        return result.json();
    }

    async sortByName(page: number) {
        const result = await fetch(
            `https://heytrade-ice-creams.herokuapp.com/api/v1/icecreams?_sort=name&_page=${page}`
        );

        if (!result.ok)
            throw new Error(`Error ${result.status}: ${result.statusText}`);

        return result.json();
    }

    async sortByPrice(page: number) {
        const result = await fetch(
            `https://heytrade-ice-creams.herokuapp.com/api/v1/icecreams?_sort=price&_page=${page}`
        );

        if (!result.ok)
            throw new Error(`Error ${result.status}: ${result.statusText}`);

        return result.json();
    }
}

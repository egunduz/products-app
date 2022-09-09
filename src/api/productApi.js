
const BASE_URI = process.env.REACT_APP_PRODUCT_API_URI ? process.env.REACT_APP_PRODUCT_API_URI : 'http://localhost:3004';

/**
 * this api consumes data from json server
 * for details about json server please visit: https://github.com/egunduz/jsonnserver-api
 */
export default class productApi {

    static getAllCompanies = ()=>{
        const url = `${BASE_URI}/companies`;
        return fetch(url);
    }

    static getProducts = (filter)=>{
        // this query will be improved 09.09.2022
        let url = `${BASE_URI}/items?_page=${filter.page}&_limit=${filter.limit}`;
        if (filter.itemTypes && filter.itemTypes.length > 0)
            url = `${url}&itemType=${filter.itemTypes[filter.itemTypes.length-1]}`;
        if (filter.manufacturers && filter.manufacturers.length > 0)
            url = `${url}&manufacturer=${filter.manufacturers[filter.manufacturers.length-1]}`;
        if (filter.sorting)
            url = `${url}&_sort=${filter.sorting}`;

        console.log("fetching:", url);

        return fetch(url);
    }
}
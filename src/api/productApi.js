
const BASE_URI = process.env.PRODUCT_API_URI ? process.env.PRODUCT_API_URI : 'http://localhost:3004';

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
        let url = `${BASE_URI}/items?_page=${filter.page}&_limit=${filter.limit}`;
        return fetch(url);
    }
}
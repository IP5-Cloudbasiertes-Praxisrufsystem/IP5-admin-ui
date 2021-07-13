import {fetchUtils} from 'react-admin';
import {stringify} from  'querystring';
import inMemoryJWT from './inMemoryJwt';
import {API_URL} from "./environment";

const httpClient = (url, options) => {
    if(!options){options = {}}
    if(!options.headers){
        options.headers = new Headers({ Accept: 'application/json' });
    }

    const token = inMemoryJWT.getToken();
    if (token) {
        options.headers.set('Authorization', `Bearer ${token}`);
    }

    return fetchUtils.fetchJson(url, options);
};


export default {
    getList: (resource, params) => {
        const url = `${API_URL}/${resource}`;
        return httpClient(url).then(({ headers, json }) => ({
            data: json,
            total: json.length
        }));
    },

    getMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        const url = `${API_URL}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({ json }) => ({ data: json }));
    },

    getOne: (resource, params) => {
        const url = `${API_URL}/${resource}/${params.id}`;
        return httpClient(url).then(({ json }) => ({ data: json }));
    },

    update: (resource, params) => {
        return httpClient(`${API_URL}/${resource}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({json}) => ({data: json}))
    },

    create: (resource, params) => {
        return httpClient(`${API_URL}/${resource}`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({json}) => ({data: json}))
    },

    delete: (resource, params) => {
        return httpClient(`${API_URL}/${resource}/${params.id}`,{
            method: 'DELETE'
        })
    },

    deleteMany: (resource, params) => {
        return httpClient(`${API_URL}/${resource}/many/${params.ids}`,{
            method: 'DELETE',
        }).then(({json}) => ({data: []}))
    },

}

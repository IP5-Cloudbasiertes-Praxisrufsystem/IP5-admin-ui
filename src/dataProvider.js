import {fetchUtils} from 'react-admin';
import {stringify} from  'querystring';

const apiUrl = 'http://localhost:5000/api';
const httpClient = fetchUtils.fetchJson;

export default {
    getList: (resource, headers, params) => {
        const url = `${apiUrl}/${resource}`;
        return httpClient(url).then(({ headers, json }) => ({
            data: json,
            total: json.length
        }));
    }
}

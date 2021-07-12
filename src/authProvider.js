import inMemoryJWT from './inMemoryJwt';

const authProvider = {
    login: ({ username, password }) => {
        let headers = new Headers();
        headers.append('Authorization', 'Basic ' + Buffer.from(username + ':' + password).toString('base64'));
        headers.append('Content-Type', 'application/json');
        const request = new Request('http://localhost:5000/api/users/login', {
            method: 'GET',
            headers: headers
        });
        return fetch(request)
            .then((response) => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                let token = response.headers.get('Authorization')
                inMemoryJWT.setToken(token);
            })
    },
    logout: () => {
        inMemoryJWT.ereaseToken();
        return Promise.resolve();
    },

    checkAuth: () => {
        return inMemoryJWT.getToken() ? Promise.resolve() : Promise.reject();
    },

    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            inMemoryJWT.ereaseToken();
            return Promise.reject();
        }
        return Promise.resolve();
    },

    getPermissions: () => {
        return inMemoryJWT.getToken() ? Promise.resolve() : Promise.reject();
    },
};

export default authProvider;

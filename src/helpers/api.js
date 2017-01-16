import moment from 'moment';


const handFetchError = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const login = (username, password) => {
    const form = new FormData()
    form.append('login', username);
    form.append('password', password)
    return fetch('/auth', {
        method: 'POST',
        body: form
    })
    .then(handFetchError)
    .then((response) => response.json());
}

const headers = (token) => (
    {
        'authorization': `Bearer ${token}`
    }
)

export const getInfo = (resource, token) =>
     fetch(
         `/api/${resource}`,
         {
             headers: headers(token)
         }
     )
     .then(handFetchError)
     .then((response) => response.json());

const dateFormat = 'YYYY-MM-DD';

export const getHistory = (start, end, token) =>
    fetch(
        `/api/history?start=${moment(start).format(dateFormat)}&end=${moment(end).format(dateFormat)}`,
        {
            headers: headers(token),
        }
    )
    .then(handFetchError)
    .then((response) => response.json());

import axios from 'axios';
import moment from 'moment';

const headers = (token) => (
    {
        'authorization': `Bearer ${token}`
    }
)

export const getInfo = (resource, token) =>
     axios.get(
         `/api/${resource}`,
         {
             headers: headers(token)
         }
     ).then((response) => response.data);

const dateFormat = 'YYYY-MM-DD';

export const getHistory = (start, end, token) =>
    axios.get(
        `/api/history`,
        {
            headers: headers(token),
            params: {
                start: moment(start).format(dateFormat),
                end: moment(end).format(dateFormat)
            }
        }
    ).then((response) => response.data);

import axios from 'axios';
import moment from 'moment';

export const getInfo = (resource) =>
     axios.get(`/api/${resource}`).then((response) => response.data);

const dateFormat = 'YYYY-MM-DD';

export const getHistory = (start, end) =>
    axios.get(`/api/history`, {
        params: {
            start: moment(start).format(dateFormat),
            end: moment(end).format(dateFormat)
        }
    })
    .then((response) => response.data);

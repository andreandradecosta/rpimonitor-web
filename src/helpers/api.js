import axios from 'axios';

export async function getData(resource) {
    try {
        const response = await axios.get(`/api/${resource}`);
        return response.data;
    } catch (err) {
        console.warn(`Error in getData(${resource})`, err);
    }
}

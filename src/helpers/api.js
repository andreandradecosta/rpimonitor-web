import axios from 'axios';


export async function getSnapshot() {
    try {
        const response = await axios.get('/api/snapshot')
        return response.data
    } catch(error) {
        console.warn('Error in getSnapshot', error);
    }
}

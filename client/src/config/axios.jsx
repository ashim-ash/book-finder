import axios from 'axios';

//base url that connects to the query server
const instance = axios.create({
    baseURL: 'http://localhost:3000/api/'
});

//a get method api call , passing the searched keyword as query
export const getBooks =async (query) => {
    try {
        const response = await instance.get(`/search?q=${query}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export default instance;
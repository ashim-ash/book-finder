import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1'
});

//fetches book data from google books api, returns json data
export const fetchBooks =async (query:string) => {
    try {
        const response = await instance.get(`/volumes?q=${query}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export default instance;
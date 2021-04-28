import axios from 'axios';

let url_base = "https://jsonplaceholder.typicode.com/albums/1/photos";

export const apiGet = async () => {
    try {
        let result = await axios.get(url_base);
        return result.data;   
    } catch (error) {
        console.error(error);
    }
};
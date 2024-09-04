
import { fetchingActions } from "./fetchingDataSlice";
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


const fetchData = async () => {
    const options = {
        method: 'GET',
        url: 'https://yt-api.p.rapidapi.com/home',
        headers: {
            'x-rapidapi-key': 'd64b1b2da3msh33c3b61fe926816p12549ejsn41e27e7fda6d',
            'x-rapidapi-host': 'yt-api.p.rapidapi.com'
        }
    };
    try {
        const response = await axios.request(options);
        dispatch(fetchingActions.initialFetch(response.data));
    } catch (error) {
        console.error('Failed to fetch data:', error);
    }
};
export const searchFetchApi = createAsyncThunk(
    'fetching/searchFetchApi',
    async (query) => {
        const options = {
            method: 'GET',
            url: 'https://yt-api.p.rapidapi.com/search',
            params: { query },
            headers: {
                'x-rapidapi-key': 'd64b1b2da3msh33c3b61fe926816p12549ejsn41e27e7fda6d',
                'x-rapidapi-host': 'yt-api.p.rapidapi.com'
            }
        };
        const response = await axios.request(options);
        return response.data.data; // Return the data
    }
);


export const fetchDataForSingleVideo = async () => {

    const options = {
        method: 'GET',
        url: 'https://yt-api.p.rapidapi.com/dl',
        params: { id: 'arj7oStGLkU' },
        headers: {
            'x-rapidapi-key': 'd64b1b2da3msh33c3b61fe926816p12549ejsn41e27e7fda6d',
            'x-rapidapi-host': 'yt-api.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

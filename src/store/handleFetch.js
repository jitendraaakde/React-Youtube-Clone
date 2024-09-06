
import { fetchingActions } from "./fetchingDataSlice";
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


const fetchData = async () => {
    const options = {
        method: 'GET',
        url: 'https://yt-api.p.rapidapi.com/home',
        headers: {
            'x-rapidapi-key': 'c1ae4f7dd0mshfb85e8b9c8239b3p16ff52jsnda2e38311629',
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
                'x-rapidapi-key': 'c1ae4f7dd0mshfb85e8b9c8239b3p16ff52jsnda2e38311629',
                'x-rapidapi-host': 'yt-api.p.rapidapi.com'
            }
        };
        const response = await axios.request(options);
        return response.data.data; // Return the data
    }
);


export const fetchDataForSingleVideo = createAsyncThunk(
    'fetching/fetchDataForSingleVideo',
    async (videoId) => {
        const options = {
            method: 'GET',
            url: 'https://yt-api.p.rapidapi.com/video/info',
            params: { id: videoId },
            headers: {
                'x-rapidapi-key': 'c1ae4f7dd0mshfb85e8b9c8239b3p16ff52jsnda2e38311629',
                'x-rapidapi-host': 'yt-api.p.rapidapi.com'
            }
        };
        const response = await axios.request(options);
        return response.data;

    }
);



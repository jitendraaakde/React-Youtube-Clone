
import { fetchingActions } from "./fetchingDataSlice";
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


const fetchData = async () => {
    const options = {
        method: 'GET',
        url: 'https://yt-api.p.rapidapi.com/home',
        headers: {
            'x-rapidapi-key': 'a47f187799mshabd0c3558769d73p1df6b5jsn53fcff8d3654',
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
                'x-rapidapi-key': 'a47f187799mshabd0c3558769d73p1df6b5jsn53fcff8d3654',
                'x-rapidapi-host': 'yt-api.p.rapidapi.com'
            }
        };
        const response = await axios.request(options);
        return response.data.data;
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
                'x-rapidapi-key': 'a47f187799mshabd0c3558769d73p1df6b5jsn53fcff8d3654',
                'x-rapidapi-host': 'yt-api.p.rapidapi.com'
            }
        };
        const response = await axios.request(options);
        return response.data;

    }
);

export const relatedVideoApi = createAsyncThunk(
    'fetching/relatedVideoApi',
    async (videoId) => {
        const options = {
            method: 'GET',
            url: 'https://yt-api.p.rapidapi.com/related',
            params: { id: videoId },
            headers: {
                'x-rapidapi-key': 'a47f187799mshabd0c3558769d73p1df6b5jsn53fcff8d3654',
                'x-rapidapi-host': 'yt-api.p.rapidapi.com'
            }
        };
        const response = await axios.request(options);
        console.log("APi called", response.data.data)
        return response.data.data;

    }
);

export const infiniteScroll = createAsyncThunk(
    'fetching/infiniteScroll',
    async (videoId) => {
        const options = {
            method: 'GET',
            url: 'https://yt-api.p.rapidapi.com/related',
            params: { id: videoId },
            headers: {
                'x-rapidapi-key': 'a47f187799mshabd0c3558769d73p1df6b5jsn53fcff8d3654',
                'x-rapidapi-host': 'yt-api.p.rapidapi.com'
            }
        };
        const response = await axios.request(options);
        console.log("APi called", response.data.data)
        return response.data.data;

    }
);
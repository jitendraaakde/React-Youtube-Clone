
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
export const API_ID = import.meta.env.VITE_ID
export const searchFetchApi = createAsyncThunk(
    'fetching/searchFetchApi',
    async (query) => {
        const options = {
            method: 'GET',
            url: 'https://yt-api.p.rapidapi.com/search',
            params: { query },
            headers: {
                'x-rapidapi-key': API_ID,
                'x-rapidapi-host': 'yt-api.p.rapidapi.com'
            }
        };
        const response = await axios.request(options);
        return response.data.data;
    }
);
export const loadForInfiniteScroll = createAsyncThunk(
    'fetching/loadForInfiniteScroll',
    async (query) => {
        const options = {
            method: 'GET',
            url: 'https://yt-api.p.rapidapi.com/search',
            params: { query },
            headers: {
                'x-rapidapi-key': API_ID,
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
                'x-rapidapi-key': API_ID,
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
                'x-rapidapi-key': API_ID,
                'x-rapidapi-host': 'yt-api.p.rapidapi.com'
            }
        };
        const response = await axios.request(options);
        return response.data.data;

    }
);


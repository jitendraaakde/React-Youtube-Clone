import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchingActions } from "./fetchingDataSlice";
import axios from "axios";

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

export const searchFetchApi = async () => {
    const options = {
        method: 'GET',
        url: 'https://yt-api.p.rapidapi.com/search',
        params: { query: 'cat' },
        headers: {
            'x-rapidapi-key': 'a47f187799mshabd0c3558769d73p1df6b5jsn53fcff8d3654',
            'x-rapidapi-host': 'yt-api.p.rapidapi.com'
        }
    };
    const response = await axios.request(options);
    console.log(response.data.data)
    return response.data.data
}


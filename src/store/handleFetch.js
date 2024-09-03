import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchingActions } from "./fetchingDataSlice";
import axios from "axios";

const fetchData = async () => {
    const options = {
        method: 'GET',
        url: 'https://yt-api.p.rapidapi.com/home',
        headers: {
            'x-rapidapi-key': '8de1eff9a8msh7f03f807bf04a3ep11b13ajsnad2aee6c21ba',
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

export const searchFetchApi = async (searchVal) => {
    const options = {
        method: 'GET',
        url: 'https://yt-api.p.rapidapi.com/search',
        params: { query: 'cat' },
        headers: {
            'x-rapidapi-key': '8de1eff9a8msh7f03f807bf04a3ep11b13ajsnad2aee6c21ba',
            'x-rapidapi-host': 'yt-api.p.rapidapi.com'
        }
    };
    const response = await axios.request(options);
    return response.data.data
}


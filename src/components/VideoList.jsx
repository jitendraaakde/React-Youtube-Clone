import { useEffect } from "react"
import Video from "./Video"
import { useDispatch, useSelector } from "react-redux"
import { fetchingActions } from "../store/fetchingDataSlice"
import store from "../store"
import axios, { all } from "axios"
import LoadingSpinner from "./LoadingSpinner"
import { searchFetchApi } from "../store/handleFetch"

const VideoList = () => {
    const dispatch = useDispatch()
    const videoData = useSelector(state => state.fetchingData)
    const allVideos = videoData.data

    const searcAPI = async () => {
        const data = await searchFetchApi()
        console.log('Search API Data', data)
    }
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

    useEffect(() => {
        fetchData();
        searcAPI()
        return () => {
        };
    }, []);

    return <div className=" container gap-4" >
        {allVideos.length == 0 ? <LoadingSpinner /> : allVideos.map((item) => <Video key={item.id} item={item} />)}
    </div>
}

export default VideoList
import { useEffect } from "react"
import Video from "./Video"
import { useDispatch, useSelector } from "react-redux"
import { fetchingActions } from "../store/fetchingDataSlice"
import store from "../store"
import axios, { all } from "axios"
import LoadingSpinner from "./LoadingSpinner"

const VideoList = () => {
    const dispatch = useDispatch()
    const videoData = useSelector(state => state.fetchingData)
    const allVideos = videoData.data
    console.log('store state', store.getState())

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

    useEffect(() => {
        fetchData();
        return () => {
        };
    }, [allVideos]);

    return <div className=" container gap-4" >
        {allVideos.length === 0 ? <LoadingSpinner /> : allVideos.map((item) => <Video key={item.id} item={item} />)}
    </div>
}

export default VideoList
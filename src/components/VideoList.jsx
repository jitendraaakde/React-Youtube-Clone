import { useEffect } from "react"
import Video from "./Video"
import { useDispatch, useSelector } from "react-redux"
import LoadingSpinner from "./LoadingSpinner"
import { API_ID, loadForInfiniteScroll, searchFetchApi } from "../store/handleFetch"
import { useLocation } from "react-router-dom"
import { UniqueYoutubeCategories } from "../store/helperFunction"
import axios from "axios"
import { fetchingActions } from "../store/fetchingDataSlice"

const VideoList = () => {
    const dispatch = useDispatch()
    const videoData = useSelector(state => state.fetchingData)
    const { changeIcon } = useSelector(state => state.sidebar)
    const allVideos = videoData.data
    const location = useLocation();
    const fetchData = async () => {
        const options = {
            method: 'GET',
            url: 'https://yt-api.p.rapidapi.com/home',
            headers: {
                'x-rapidapi-key': API_ID,
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
        if (location.state && location.state.searchValue) {
            dispatch(searchFetchApi(location.state.searchValue));
        } else {
            fetchData();
        }
    }, [location.state, location.state?.searchValue]); // Add dependencies
    let i = 0;
    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
            dispatch(loadForInfiniteScroll(UniqueYoutubeCategories[i]));
            i++;
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <>
        <>
            <div className="container pt-14 gap-3">
                {allVideos.length === 0 ? (
                    <LoadingSpinner />
                ) : (
                    allVideos.map((item, index) => (
                        <Video key={item.videoId || index} item={item} /> // Using item.videoId or index as a fallback
                    ))
                )}
            </div>
            <div className="loader w-[100%]"></div>
        </>
    </>
}

export default VideoList
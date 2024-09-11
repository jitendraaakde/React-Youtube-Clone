import { useEffect } from "react"
import Video from "./Video"
import { useDispatch, useSelector } from "react-redux"
import { fetchingActions } from "../store/fetchingDataSlice"
import axios from "axios"
import LoadingSpinner from "./LoadingSpinner"
import { loadForInfiniteScroll, searchFetchApi } from "../store/handleFetch"
import { useLocation } from "react-router-dom"

const VideoList = () => {
    const dispatch = useDispatch()
    const videoData = useSelector(state => state.fetchingData)
    const allVideos = videoData.data
    const location = useLocation();
    const fetchData = async () => {
        const options = {
            method: 'GET',
            url: 'https://yt-api.p.rapidapi.com/home',
            headers: {
                'x-rapidapi-key': '4f453754bamsh0092c24269f09fdp11b298jsn8968eeef8bb6',
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
            console.log('search valye 2', location.state)
            dispatch(searchFetchApi(location.state.searchValue));
        } else {
            fetchData();
        }
        return () => {
        };
    }, []);

    const youtubeCategories = [
        'History', 'Photography', 'Architecture', 'Wildlife', 'Nature', 'Motivation',
        'Meditation', 'Animation', 'Astrology', 'Psychology', 'Finance', 'Entrepreneurship',
        'Crafts', 'Gardening', 'Automobiles', 'Astronomy', 'Music Production', 'Martial Arts',
        'Literature', 'Adventure'
    ];

    let i = 0;
    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
            dispatch(loadForInfiniteScroll(youtubeCategories[i]));
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
        <div className=" container pt-14 gap-4" >
            {allVideos.length === 0 ? <LoadingSpinner /> : allVideos.map((item) => <Video key={item.videoId} item={item} />)}
        </div>
        <div className="loader w-[100%]"></div>
    </>
}

export default VideoList
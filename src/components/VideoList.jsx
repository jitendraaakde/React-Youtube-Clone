import { useEffect } from "react"
import Video from "./Video"
import { useDispatch, useSelector } from "react-redux"
import { fetchingActions } from "../store/fetchingDataSlice"
import axios, { all } from "axios"
import LoadingSpinner from "./LoadingSpinner"
import { infiniteScroll, searchFetchApi } from "../store/handleFetch"

const VideoList = () => {
    const dispatch = useDispatch()
    const videoData = useSelector(state => state.fetchingData)
    const allVideos = videoData.data

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
        return () => {
        };
    }, []);

    const youtubeCategories = [
        'Music', 'Gaming', 'News', 'Sports', 'Movies', 'Education',
        'Comedy', 'Technology', 'Science', 'Fitness', 'Travel', 'Food',
        'Vlogs', 'DIY', 'Beauty', 'Fashion', 'Reviews', 'Lifestyle', 'Pets'
    ];
    let i = 0;
    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
            dispatch(infiniteScroll(youtubeCategories[i]));
            i++;
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <div className=" container pt-14 gap-4" >
        {allVideos.length == 0 ? <LoadingSpinner /> : allVideos.map((item) => <Video key={item.videoId} item={item} />)}
    </div>
}

export default VideoList
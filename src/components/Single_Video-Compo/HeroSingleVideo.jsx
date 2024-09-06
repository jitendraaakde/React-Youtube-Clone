import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import { MdOutlineFileDownload } from "react-icons/md";
import profileImage from "/Users/macmini27/React_course/PROJECTS/YT-Clone/src/assets/Screenshot_2024-07-20-17-21-39-667_com.instagram.android (1).jpg"
import { useLocation, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchDataForSingleVideo } from "../../store/handleFetch";
import RelatedVideos from "./RelatedVideos";


const HeroSingleVideo = () => {
    const { videoData, status } = useSelector(state => state.singleVideo);
    const dispatch = useDispatch();
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const videoId = query.get('v');
    // useEffect(() => {
    //     dispatch(fetchDataForSingleVideo(videoId))
    // }, [])
    console.log('VideData', videoData, 'videoId', videoId)

    function formatNumber(number) {
        if (number < 1_000) {
            // Less than 1000, return the number itself
            return number.toString();
        } else if (number < 1_000_000) {
            // Less than 1 million, format as thousands with 'K'
            return (number / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
        } else if (number < 1_000_000_000) {
            // Less than 1 billion, format as millions with 'M'
            return (number / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
        } else {
            // 1 billion or more, format as billions with 'B'
            return (number / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
        }
    }

    return <div className="mt-20 w-[100%] h-[90vh] flex justify-center gap-10 ">
        <div className=" h-[100vh] w-[62%]">
            <iframe style={{ borderRadius: '15px' }} width="853" height="480" src={`https://www.youtube.com/embed/${videoId}?si=rMnd9PE7FJYgKHlL`} title="YouTube video player"  >
            </iframe>
            <p className="text-[20px] m-2 font-bold">{videoData.title}</p>

            <div className="flex justify-between items-center mr-2 ml-2">
                <div className="flex justify-center items-center gap-5">
                    <div className="flex justify-around gap-3">
                        <img src={profileImage} className="h-10 w-10 rounded-[50%]" alt="" />
                        <div className=" ">
                            <p className="text-[16px]">{videoData.channelTitle}</p>
                            <p className="text-[12px]">{formatNumber(videoData.viewCount)}  </p>
                        </div>
                    </div>
                    <button className="bg-slate-200  rounded-[15px] pl-[10px] w-20 h-9 pr-[10px] text-[14px] font-medium">Join</button>
                    <button className="bg-slate-900  rounded-[15px] pl-[10px] pr-[10px] w-24 h-9 text-white text-[14px] font-medium">Subscribe</button>

                </div>
                <div className="flex justify-center items-center gap-4">
                    <div className="flex justify-center items-center gap-[1px]">
                        <p className=""><AiOutlineLike className="bg-slate-200 w-20 h-9 p-[6px] rounded-[17px_0px_0px_17px] " /></p>

                        <p><BiDislike className="bg-slate-200 w-20 h-9 p-[6px] rounded-[0px_17px_17px_0px] " /></p>
                    </div>

                    <p className="flex justify-center items-center bg-slate-200 w-24 h-9 p-1 gap-2 rounded-[17px] text-[14px]"><PiShareFat /> Share</p>

                    <p className="flex justify-center items-center bg-slate-200 w-28 h-9 p-1 gap-2 rounded-[17px] text-[14px]"><MdOutlineFileDownload />Download</p>

                </div>
            </div>
            <div className="bg-slate-200 h-28 w-[98%] rounded-[17px] mt-4 m-[0px_auto]">
                <div className="">
                    <p></p>
                    <p></p>
                </div>
                <div className="w-[100%]"></div>
            </div>
        </div>
        <div className=" h-[100vh] w-[32%] overflow-y-scroll">
            <RelatedVideos></RelatedVideos>
            <RelatedVideos></RelatedVideos>
            <RelatedVideos></RelatedVideos>
            <RelatedVideos></RelatedVideos>
            <RelatedVideos></RelatedVideos>
            <RelatedVideos></RelatedVideos>
            <RelatedVideos></RelatedVideos>
            <RelatedVideos></RelatedVideos>
            <RelatedVideos></RelatedVideos>
            <RelatedVideos></RelatedVideos>
            <RelatedVideos></RelatedVideos>
            <RelatedVideos></RelatedVideos>
            <RelatedVideos></RelatedVideos>
            <RelatedVideos></RelatedVideos>
            <RelatedVideos></RelatedVideos>
            <RelatedVideos></RelatedVideos>
            <RelatedVideos></RelatedVideos>
            <RelatedVideos></RelatedVideos>
        </div>

    </div>
}
export default HeroSingleVideo      
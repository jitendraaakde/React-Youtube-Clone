import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import { MdOutlineFileDownload } from "react-icons/md";
import { useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchDataForSingleVideo, relatedVideoApi } from "../../store/handleFetch";
import RelatedVideos from "./RelatedVideos";
import { formatNumber } from "../../store/helperFunction";


const HeroSingleVideo = () => {
    const { videoData } = useSelector(state => state.singleVideo);
    const { data } = useSelector(state => state.relatedVideo);
    const dispatch = useDispatch();
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const videoId = query.get('v');

    useEffect(() => {
        if (videoId) {
            dispatch(fetchDataForSingleVideo(videoId));
            dispatch(relatedVideoApi(videoId));
        }
    }, [dispatch, videoId]); // Added videoId and dispatch to the dependency array
    let date = videoData.publishDate ? videoData.publishDate : ''
    date = date.split('T')[0]

    return <div className="mt-20 w-[100%] h-[90vh] flex justify-center gap-10 single-video ">
        <div className=" h-[100vh] w-[62%]">
            <iframe style={{ borderRadius: '15px' }} className="w-[100%] h-[480px] single-video-player" src={`https://www.youtube.com/embed/${videoId}?si=rMnd9PE7FJYgKHlL`} title="YouTube video player"  >
            </iframe>
            <p className="text-[20px] m-2 font-bold">{videoData?.title}</p>

            <div className="flex justify-between items-center mr-2 ml-2 gap-3">
                <div className="flex justify-center items-center gap-5">
                    <div className="flex justify-around gap-3">
                        <img src={videoData?.thumbnail?.[0]?.url} className="h-10 w-10 rounded-[50%]" alt="" />
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
            <div className="bg-slate-200  h-28 w-[98%] rounded-[17px] mt-4 m-[0px_auto] text-[14px] ">
                <div className="flex items-center gap-2 pl-3 pr-3 pt-2">
                    <p className="font-bold">{formatNumber(videoData.viewCount)} </p>
                    <p className="font-bold">{date}</p>
                </div>
                <div className={`w-[100%] pl-3 pr-3  description`}> <p className="">{videoData.description}</p></div>
            </div>
        </div>
        <div className="h-[100vh] w-[32%] min-w-4 overflow-y-scroll">
            {data.map((item, index) => (
                <RelatedVideos key={item.videoId || index} item={item} />
            ))}
        </div>


    </div>
}
export default HeroSingleVideo      

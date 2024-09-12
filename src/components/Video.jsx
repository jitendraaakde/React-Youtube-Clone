import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { sidebarAction } from "../store/navbarSlice";
import { formatNumber } from "../store/helperFunction";

const Video = ({ item }) => {
    const { toggle } = useSelector(state => state.sidebar)
    const dispatch = useDispatch()
    const isValidItem = item?.type === 'video' &&
        item?.thumbnail?.[1]?.url &&
        item?.channelThumbnail?.[0]?.url &&
        item?.title &&
        item?.channelTitle &&
        item?.viewCount &&
        item?.publishedTimeText;

    if (!isValidItem) return null;
    return (
        <Link to={`/watch?v=${item.videoId
            }`} onClick={() => dispatch(sidebarAction.changeIcon())} >

            <div className={`${toggle ? 'w-[380px] h-[340px]' : 'w-[343px] h-[300px]'} max-w-[800px] min-w-[310px] gap-1`}>
                <img
                    src={item.thumbnail[1].url}
                    className='w-full h-auto object-cover rounded-[15px]'
                    alt={item.title || 'Video Thumbnail'}
                />

                <div className='flex p-3 gap-1'>
                    <img
                        src={item.channelThumbnail[0].url}
                        className='w-8 h-8 rounded-[50%]'
                        alt={item.channelTitle || 'Channel Thumbnail'}
                    />
                    <div className='mb-2'>
                        <p className='truncated-multiline ml-1'>{item.title}</p>
                        <p className='text-[14px]'>{item.channelTitle}</p>
                        <p className='text-[14px]'>{formatNumber(item.viewCount)} Views · {item.publishedTimeText}</p>
                    </div>
                    <div className="float-right">
                        <BsThreeDotsVertical className='w-4 h-4' />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Video;

import { BsThreeDotsVertical } from "react-icons/bs";

const Video = ({ item }) => {
    const isValidItem = item?.type === 'video' &&
        item?.thumbnail?.[1]?.url &&
        item?.channelThumbnail?.[0]?.url &&
        item?.title &&
        item?.channelTitle &&
        item?.viewCount &&
        item?.publishedTimeText;

    if (!isValidItem) return null;

    return (
        <div className="w-[343px] h-[300px] max-w-[800px] min-w-[310px] gap-1">
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
                    <p className='text-[14px]'>{item.viewCount} Views · {item.publishedTimeText}</p>
                </div>
                <div>
                    <BsThreeDotsVertical className='w-4 h-4' />
                </div>
            </div>
        </div>
    );
};

export default Video;

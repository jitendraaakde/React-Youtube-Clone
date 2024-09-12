import { Link } from 'react-router-dom';
import { formatNumber } from '../../store/helperFunction';
const RelatedVideos = ({ item }) => {
    const isValidItem = item?.type === 'video' &&
        item?.thumbnail?.[1]?.url &&
        item?.title &&
        item?.channelTitle &&
        item?.viewCount &&
        item?.publishedTimeText;

    if (!isValidItem) return null;

    return <Link to={`/watch?v=${item.videoId
        }`}>
        <div className='flex gap-3 mt-2 w-[100%] related-video'>
            <img src={item.thumbnail[1].url} className='w-40 h-24 rounded-[10px]' alt="" />
            <div className=''>
                <p className='text-[14px] mt-1 font-bold related-video-title'>{item.title}</p>
                <p className='text-[12px] mt-1'> {item.channelTitle}</p>
                <div className='flex gap-2'>
                    <p className='text-[12px] mt-1'>{formatNumber(item.viewCount)}</p>
                    <p className='text-[12px] mt-1'>{item.publishedTimeText}</p>
                </div>
            </div>

        </div>
    </Link>
}
export default RelatedVideos
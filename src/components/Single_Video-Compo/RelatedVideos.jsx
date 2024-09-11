import { Link } from 'react-router-dom';
import thumbNailImage from '/src/assets/thumb2.webp'
const RelatedVideos = ({ item }) => {
    const isValidItem = item?.type === 'video' &&
        item?.thumbnail?.[1]?.url &&
        item?.title &&
        item?.channelTitle &&
        item?.viewCount &&
        item?.publishedTimeText;

    if (!isValidItem) return null;

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
    return <Link to={`/watch?v=${item.videoId
        }`}>
        <div className='flex gap-3 mt-2 w-[100%]'>
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
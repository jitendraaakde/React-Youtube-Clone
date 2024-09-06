import thumbNailImage from '/src/assets/thumb2.webp'
const RelatedVideos = () => {
    return <div className='flex gap-3 mt-2'>
        <img src={thumbNailImage} className='w-40 h-24 rounded-[10px]' alt="" />
        <div className=''>
            <p className='text-[14px] mt-1 font-bold'>Video Title of related Videos</p>
            <p className='text-[12px] mt-1'> Channel Name of Related Videos</p>
            <div className='flex gap-3'>
                <p className='text-[12px] mt-1'>25M Videws . </p>
                <p className='text-[12px] mt-1'>2 Weeks Ago</p>
            </div>
        </div>

    </div>
}
export default RelatedVideos
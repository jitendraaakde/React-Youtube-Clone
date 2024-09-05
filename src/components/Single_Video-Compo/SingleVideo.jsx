import { useLocation, useParams } from "react-router-dom"
const SingleVideo = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const videoId = query.get('v');
    return <>
        <iframe style={{ borderRadius: '15px' }} width="853" height="480" src={`https://www.youtube.com/embed/${videoId}?si=rMnd9PE7FJYgKHlL`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
    </>
}
export default SingleVideo
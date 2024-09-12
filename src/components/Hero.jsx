import { useSelector } from "react-redux"
import HeroCategories from "./HeroCategories"
import VideoList from "./VideoList"

const Hero = () => {
    const { toggle } = useSelector(state => state.sidebar)
    const marginLeft = toggle ? "ml-[110px]" : 'ml-[220px]'

    return <div className={`mt-14 ${marginLeft} mr-5 `}>
        <VideoList />
    </div>
}
export default Hero

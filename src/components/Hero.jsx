import { useSelector } from "react-redux"
import HeroCategories from "./HeroCategories"
import VideoList from "./VideoList"

const Hero = () => {
    const { toggle } = useSelector(state => state.sidebar)
    const marginLeft = toggle ? "ml-[110px]" : 'ml-[220px]'

    return <div className={`mt-[56px] ${marginLeft} `}>
        <HeroCategories></HeroCategories>
        <VideoList />
    </div>
}
export default Hero

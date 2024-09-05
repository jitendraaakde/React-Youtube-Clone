import { Outlet } from "react-router-dom"
import Navbar from "../Navbar"
import Sidebar from "../Sidebar"
import SingleVideo from "./SingleVideo"
import HeroSingleVideo from "./HeroSingleVideo"

const SingleHome = () => {
    return <>
        <Navbar />
        <HeroSingleVideo></HeroSingleVideo>


    </>

}
export default SingleHome
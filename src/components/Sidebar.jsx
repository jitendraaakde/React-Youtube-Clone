import SidebarButtons from "./SidebarButtons"
import { IoMdHome } from "react-icons/io";
import { IoIosVideocam } from "react-icons/io";
import { MdOutlineSubscriptions } from "react-icons/md";
import { LiaHistorySolid } from "react-icons/lia";
import { PiPlaylist } from "react-icons/pi";
import { BiSolidVideos } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { BsFire } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { PiFilmSlateBold } from "react-icons/pi";
import { MdOutlineWifiTethering } from "react-icons/md";
import { useState } from "react";
import { useSelector } from "react-redux";
const Sidebar = () => {

    const sidebarItems = [
        {
            title: "Home",
            logo: <IoMdHome className="size-6"></IoMdHome>

        },
        {
            title: "Shorts",
            logo: <IoIosVideocam className="size-6"></IoIosVideocam>
        },
        {
            title: "Subscriptions",
            logo: <MdOutlineSubscriptions className="size-6"></MdOutlineSubscriptions>
        },
        {
            title: "History",
            logo: <LiaHistorySolid className="size-6"></LiaHistorySolid>
        },
        {
            title: "Playlists",
            logo: <PiPlaylist className="size-6" />
        },
        {
            title: "Your videos",
            logo: <BiSolidVideos className="size-6" />
        },
        {
            title: "Watch Later",
            logo: <MdOutlineWatchLater className="size-6" />
        },
        {
            title: "Liked videos",
            logo: <AiOutlineLike className="size-6" />
        },
        {
            title: "Trending",
            logo: <BsFire className="size-6" />
        },
        {
            title: "Shopping",
            logo: <AiOutlineShopping className="size-6" />
        },
        {
            title: "Music",
            logo: <IoMusicalNoteOutline className="size-6" />
        },
        {
            title: "Films",
            logo: <PiFilmSlateBold className="size-6" />
        },
        {
            title: "Live",
            logo: <MdOutlineWifiTethering className="size-6" />
        },
        {
            title: "Music",
            logo: <IoMusicalNoteOutline className="size-6" />
        },
        {
            title: "Films",
            logo: <PiFilmSlateBold className="size-6" />
        },
        {
            title: "Live",
            logo: <MdOutlineWifiTethering className="size-6" />
        }
    ];
    const { toggle } = useSelector(state => state.sidebar)
    const marginLeft = toggle ? "w-[80px]" : ' w-[200px]'

    return <div className={`h-full element ${marginLeft} ${toggle && 'navbar-css'} overflow-y-auto p-3 mt-16  flex fixed top-0 left-0 z-10 float-left flex-col`}>
        {sidebarItems.map((item) => <SidebarButtons item={item} />)}
    </div>
}
export default Sidebar
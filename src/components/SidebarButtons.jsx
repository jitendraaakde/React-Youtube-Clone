import { useSelector } from "react-redux";

const SidebarButtons = ({ item }) => {
    const { toggle } = useSelector(state => state.sidebar)
    return <div className="p-2 rounded-lg m-1 items-start sidebarButtons flex justify-start  " >
        <div>{item.logo}</div>
        {!toggle && <p className="text-[14px] ml-5 ">{item.title} </p>}

    </div>
}
export default SidebarButtons


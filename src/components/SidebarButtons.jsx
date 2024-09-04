import { useSelector } from "react-redux";

const SidebarButtons = ({ item, categoryData, currCategory }) => {
    const { toggle } = useSelector(state => state.sidebar)
    return <div onClick={() => categoryData(item.title)} className={`p-2 rounded-lg m-1 items-start cursor-pointer sidebarButtons flex justify-start ${currCategory === item.title && 'sidebarcategory'}`}>
        <div>{item.logo}</div>
        {!toggle && <p className="text-[14px] ml-5 ">{item.title} </p>}

    </div>
}
export default SidebarButtons


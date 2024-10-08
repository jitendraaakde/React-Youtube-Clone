import { FiMenu } from "react-icons/fi";
import youtubeLogo from '../assets/Youtube-logo-navbar2.png';
import { CiSearch } from "react-icons/ci";
import { IoCloudUploadOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import profileImage from '../assets/person.webp'
import { useDispatch, useSelector } from "react-redux";
import { sidebarAction } from "../store/navbarSlice";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaLessThan } from "react-icons/fa6";


const Navbar = () => {
    const { changeIcon } = useSelector(state => state.sidebar)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const inputData = useRef()

    const handleNavbar = () => {
        dispatch(sidebarAction.toggleSidebar())
        inputData.current.value = ""

    }
    const handleSearch = (val) => {
        navigate('/', { state: { searchValue: val } });
        if (changeIcon) {
            dispatch(sidebarAction.changeIcon())
        }
    };
    const clickForchangeIcon = () => {
        dispatch(sidebarAction.changeIcon())
        navigate('/')
    }
    return (
        <div className="w-full h-[56px] p-[0px_16px] z-500 flex justify-between items-center top-0 left-0 z-1000 bg-white fixed">
            <div className="flex justify-evenly items-center w-[169px] h-[56px] gap-1">
                <div className="cursor-pointer"> {changeIcon ? <FaLessThan className="font-bold" onClick={clickForchangeIcon} /> : <FiMenu onClick={handleNavbar} className="w-[24px] h-[24px]" />}
                </div>
                <div className="w-[90px] h-[20px]">
                    <Link to="/" onClick={changeIcon ? () => dispatch(sidebarAction.changeIcon()) : () => { }} >
                        <img src={youtubeLogo} alt="YouTube Logo" className="w-full h-auto" /></Link>
                </div>
            </div>
            <div className="w-[45%] h-10 flex items-center">
                <input
                    type="text" ref={inputData} name="inputBox"
                    className="w-full h-full p-[0px_15px] border-2 border-solid rounded-[20px_0px_0px_20px]"
                    placeholder="Search"
                />
                <button onClick={() => handleSearch(inputData.current.value)} className="flex justify-center items-center w-[64px] h-[40px] border-2 border-solid p-[1px_6px] cursor-pointer bg-slate-100 rounded-[0px_40px_40px_0px]">
                    <CiSearch className="w-[24px] h-[24px]" />
                </button>
            </div>

            <div className="flex justify-between items-center w-[156px] ">
                <div><IoCloudUploadOutline className="w-[24px] h-[24px]" /></div>
                <div><FaRegBell className="w-[24px] h-[24px]" /></div>
                <div className="w-[60px] h-[34px]"><img className="w-[32px] h-[32px] rounded-[50%]" src={profileImage} alt="" /></div>
            </div>
        </div>
    );
}

export default Navbar;

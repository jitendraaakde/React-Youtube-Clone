import SingleVideo from "./SingleVideo"
import profileImage from "/Users/macmini27/React_course/PROJECTS/YT-Clone/src/assets/Screenshot_2024-07-20-17-21-39-667_com.instagram.android (1).jpg"

const HeroSingleVideo = () => {
    return <div className="mt-20 w-[100%] h-[90vh] flex justify-center gap-4  ">
        <div className=" h-[100vh] w-[62%] ">
            <SingleVideo></SingleVideo>
            <p className="text-[20px] m-2 font-bold">Let's Build & Deploy YouTube Clone with (ReactJS, Redux Toolkit, Tailwind CSS)</p>

            <div className="flex justify-between items-center ">
                <div className="flex gap-5">
                    <div className="flex justify-around gap-3">
                        <img src={profileImage} className="h-10 w-10 rounded-[50%]" alt="" />
                        <div className=" ">
                            <p className="text-[16px]">Patel MernStack</p>
                            <p className="text-[12px]">11.6K Subscribers </p>
                        </div>
                    </div>
                    <button className="bg-slate-400  rounded-[15px] pl-[10px] w-16 h-8 pr-[10px] font-medium">Join</button>
                    <button className="bg-slate-950  rounded-[15px] pl-[10px] pr-[10px] w-24 h-8 text-white font-medium">Subscribe</button>
                </div>
                <div className="flex justify-center">
                    <p>LIKE </p>
                    <p>DISLIKE</p>
                    <p>Share</p>
                    <p>Download</p>

                </div>
            </div>
        </div>
        <div className="bg-red-400 h-[100vh] w-[32%]">BOX2</div>
    </div>
}
export default HeroSingleVideo      
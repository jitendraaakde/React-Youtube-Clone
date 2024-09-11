// HeroCategories.js
import React, { useRef, useState } from 'react';
import CategoriesButtons from './CategoriesButtons';
import { useDispatch, useSelector } from 'react-redux';
import { heroCategoriesSliceActions } from '../store/heroCategoriesSlice';
import { searchFetchApi } from '../store/handleFetch';
import { sidebarAction } from '../store/navbarSlice';

const HeroCategories = () => {
    const { current } = useSelector(state => state.heroCategory);
    const dispatch = useDispatch();
    const youtubeCategories = [
        'All', 'Music', 'Gaming', 'News', 'Sports', 'Movies', 'Education',
        'Comedy', 'Technology', 'Science', 'Fitness', 'Travel', 'Food', 'Vlogs', 'DIY', 'Beauty', 'Fashion', 'Reviews', 'Lifestyle', 'Pets'

    ];

    const [showLeft, setShowLeft] = useState(false);
    const scrollContainerRef = useRef(null);



    const handleButtonClick = (value) => {
        dispatch(heroCategoriesSliceActions.changeCategoryList(value));
        dispatch(searchFetchApi(value));
        dispatch(sidebarAction.changeCategory('Home'))

    };

    const { toggle } = useSelector(state => state.sidebar);
    const marginLeft = toggle ? "ml-[110px]" : 'ml-[220px]';

    const handleSlide = (direction) => {
        setShowLeft(true);
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -200 : 200,
                behavior: 'smooth',
            });
        }
    };
    //   
    return (
        <div className={`${toggle ? 'w-[92%] ml-[8%]' : 'w-[85%]  ml-[15%]'} flex bg-white fixed items-center  px-4 `}>
            <button
                className="arrow left-arrow absolute p-1 "
                onClick={() => handleSlide('left')}
            >
                &lt;
            </button>

            <div
                className="flex overflow-x-scroll w-full categories-name"
                ref={scrollContainerRef}
            >
                {youtubeCategories.map((item, index) => (
                    <CategoriesButtons
                        current={current}
                        key={index}
                        handleButtonClick={handleButtonClick}
                        item={item}
                    />
                ))}
            </div>

            <button
                className="arrow right-arrow absolute p-1 mr-1"
                onClick={() => handleSlide('right')}
            >
                &gt;
            </button>
        </div>
    );
};

export default HeroCategories;

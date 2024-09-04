// HeroCategories.js
import React, { useRef, useState } from 'react';
import CategoriesButtons from './CategoriesButtons';
import { useDispatch, useSelector } from 'react-redux';
import { heroCategoriesSliceActions } from '../store/heroCategoriesSlice';
import { searchFetchApi } from '../store/handleFetch';

const HeroCategories = () => {
    const { current } = useSelector(state => state.heroCategory);
    const dispatch = useDispatch();
    const youtubeCategories = [
        'All', 'Music', 'Gaming', 'News', 'Sports', 'Movies', 'Education',
        'Comedy', 'Technology', 'Science', 'Fitness', 'Travel', 'Food',
        'Vlogs', 'DIY', 'Beauty', 'Fashion', 'Reviews', 'Lifestyle', 'Pets'
    ];
    const [showLeft, setShowLeft] = useState(false);
    const scrollContainerRef = useRef(null);

    const handleSlide = (direction) => {
        setShowLeft(true);
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -200 : 200,
                behavior: 'smooth',
            });
        }
    };

    const handleButtonClick = (value) => {
        dispatch(heroCategoriesSliceActions.changeCategoryList(value));
        dispatch(searchFetchApi(value));
    };

    const { toggle } = useSelector(state => state.sidebar);
    const marginLeft = toggle ? "ml-[110px]" : 'ml-[220px]';

    return (
        <div className={` ${marginLeft} flex bg-white fixed`}>
            <div className='w-[100%] flex '>
                <button className="arrow left-arrow " onClick={() => handleSlide('left')}>&lt;</button>

                <div className="flex overflow-x-scroll scrollable-container  float-start pl-3 pr-3" ref={scrollContainerRef}>
                    {youtubeCategories.map((item, index) => (
                        <CategoriesButtons current={current} key={index} handleButtonClick={handleButtonClick} item={item} />
                    ))}
                </div>

                <button className="arrow right-arrow " onClick={() => handleSlide('right')}>&gt;</button>
            </div>
        </div>
    );
};

export default HeroCategories;

import React, { useRef, useState } from 'react';
import CategoriesButtons from './CategoriesButtons';

const HeroCategories = () => {
    const youtubeCategories = [
        'All', 'Music', 'Gaming', 'News', 'Sports', 'Movies', 'Education',
        'Comedy', 'Technology', 'Science', 'Fitness', 'Travel', 'Food',
        'Vlogs', 'DIY', 'Beauty', 'Fashion', 'Reviews', 'Lifestyle', 'Pets'
    ];
    const [showLeft, setShowLeft] = useState(false)
    const scrollContainerRef = useRef(null);
    const handleSlide = (direction) => {
        setShowLeft(true)
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -200 : 200,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="  flex items-center relative">
            {showLeft && <button className="arrow left-arrow" onClick={() => handleSlide('left')}> &lt;   </button>}

            <div className="flex overflow-x-auto scrollable-container float-start pl-3 pr-3"
                ref={scrollContainerRef}>
                {youtubeCategories.map((item, index) => (
                    <CategoriesButtons key={index} item={item} />
                ))}
            </div>
            <button className="arrow right-arrow" onClick={() => handleSlide('right')}>
                &gt;
            </button>
        </div>
    );
};

export default HeroCategories;

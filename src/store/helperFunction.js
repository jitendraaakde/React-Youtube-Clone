export function formatNumber(number) {
    if (number < 1_000) {
        // Less than 1000, return the number itself
        return number.toString();
    } else if (number < 1_000_000) {
        // Less than 1 million, format as thousands with 'K'
        return (number / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
    } else if (number < 1_000_000_000) {
        // Less than 1 billion, format as millions with 'M'
        return (number / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    } else {
        // 1 billion or more, format as billions with 'B'
        return (number / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
    }
}

export const youtubeCategories = [
    'All', 'Music', 'Gaming', 'News', 'Sports', 'Movies', 'Education',
    'Comedy', 'Technology', 'Science', 'Fitness', 'Travel', 'Food', 'Vlogs', 'DIY', 'Beauty', 'Fashion', 'Reviews', 'Lifestyle', 'Pets'

];

export const UniqueYoutubeCategories = [
    'History', 'Photography', 'Architecture', 'Wildlife', 'Nature', 'Motivation',
    'Meditation', 'Animation', 'Astrology', 'Psychology', 'Finance', 'Entrepreneurship',
    'Crafts', 'Gardening', 'Automobiles', 'Astronomy', 'Music Production', 'Martial Arts',
    'Literature', 'Adventure'
];
import { configureStore } from '@reduxjs/toolkit';
import fetchingSlice from './fetchingDataSlice'
import sidebarToggleSlice from './navbarSlice'
import heroCategoriesSlice from './heroCategoriesSlice';
import videoSlice from './fetchSingleVideoSlice';
import relatedVideoFetchSlice from './relatedVideoFetchingSlice';
const store = configureStore({
    reducer: {
        sidebar: sidebarToggleSlice.reducer,
        fetchingData: fetchingSlice.reducer,
        heroCategory: heroCategoriesSlice.reducer,
        singleVideo: videoSlice.reducer,
        relatedVideo: relatedVideoFetchSlice.reducer
    }
});

export default store;

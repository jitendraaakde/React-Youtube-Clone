import { configureStore } from '@reduxjs/toolkit';
import fetchingSlice from './fetchingDataSlice'
import sidebarToggleSlice from './navbarSlice'
import heroCategoriesSlice from './heroCategoriesSlice';
const store = configureStore({
    reducer: {
        sidebar: sidebarToggleSlice.reducer,
        fetchingData: fetchingSlice.reducer,
        heroCategory: heroCategoriesSlice.reducer
    }
});

export default store;

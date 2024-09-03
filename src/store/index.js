import { configureStore } from '@reduxjs/toolkit'
import sidebarToggleSlice from './navbarSlice'
import fetchingSlice from './fetchingDataSlice'

const store = configureStore({
    reducer: {
        sidebar: sidebarToggleSlice.reducer,
        fetchingData: fetchingSlice.reducer
    }
})
export default store
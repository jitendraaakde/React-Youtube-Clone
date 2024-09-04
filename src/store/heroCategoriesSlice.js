import { createSlice } from "@reduxjs/toolkit";

const heroCategoriesSlice = createSlice({
    name: 'categoryList',
    initialState: { current: 'All' },
    reducers: {
        changeCategoryList: (state, action) => {
            state.current = action.payload
        }
    }
})
export const heroCategoriesSliceActions = heroCategoriesSlice.actions
export default heroCategoriesSlice
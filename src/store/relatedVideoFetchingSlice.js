import { createSlice } from "@reduxjs/toolkit";
import { relatedVideoApi } from "./handleFetch";

const relatedVideoFetchSlice = createSlice({
    name: 'related',
    initialState: {
        data: [],
        status: 'success',
        error: 'error Msg'
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(relatedVideoApi.pending, (state) => {
                console.log("Loading data", state)
                state.status = 'loading';
            })
            .addCase(relatedVideoApi.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(relatedVideoApi.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || 'Failed to fetch video data';
            });
    },

})
export const relatedVideoFetchSliceActions = relatedVideoFetchSlice.actions
export default relatedVideoFetchSlice

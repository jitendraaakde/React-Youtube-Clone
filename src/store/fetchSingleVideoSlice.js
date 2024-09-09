import { createSlice } from '@reduxjs/toolkit';
import { fetchDataForSingleVideo, relatedVideoApi } from './handleFetch';

const videoSlice = createSlice({
    name: 'video',
    initialState: {
        videoData: { title: 'Loading', channelTitle: "Loading", viewCount: 100 },
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataForSingleVideo.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchDataForSingleVideo.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.videoData = action.payload;
            })
            .addCase(fetchDataForSingleVideo.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || 'Failed to fetch video data';
            });
    },

});
export const fetchDataForSingleVideoActions = videoSlice.actions
export default videoSlice;

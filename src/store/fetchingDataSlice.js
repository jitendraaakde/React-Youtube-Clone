// fetchingDataSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { loadForInfiniteScroll, searchFetchApi } from './handleFetch';

const fetchingSlice = createSlice({
    name: 'fetching',
    initialState: {
        data: [],
        status: 'loading',
        load: 'loading',
        error: null,
    },
    reducers: {
        initialFetch: (state, action) => {
            state.data = action.payload.data;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchFetchApi.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(searchFetchApi.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(searchFetchApi.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
        builder
            .addCase(loadForInfiniteScroll.pending, (state) => {
                state.load = 'loading';
            })
            .addCase(loadForInfiniteScroll.fulfilled, (state, action) => {
                state.load = 'succeeded';
                state.data = [...state.data, ...action.payload];
            })
            .addCase(loadForInfiniteScroll.rejected, (state, action) => {
                state.load = 'failed';
                state.error = action.payload;
            });
    }
}
)
export const fetchingActions = fetchingSlice.actions;
export default fetchingSlice

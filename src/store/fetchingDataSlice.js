// fetchingDataSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { searchFetchApi } from './handleFetch';

const fetchingSlice = createSlice({
    name: 'fetching',
    initialState: {
        data: [],
        status: 'idle',
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
            });
    },
});

export const fetchingActions = fetchingSlice.actions;
export default fetchingSlice

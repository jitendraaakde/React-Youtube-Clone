import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchFetchApi } from "./handleFetch";

const fetchingSlice = createSlice({
    name: 'fetching',
    initialState: { data: [] },
    reducers: {
        initialFetch: (state, action) => {
            state.data = action.payload.data
        },
        searchFetch: async (state, action) => {
            console.log('Initial data ', state, action)
            const data = await searchFetchApi(action.payload.data)
            console.log('Data of Videos from API', data)
            state.data = data
            console.log(state)
        }

    }
})
export const fetchingActions = fetchingSlice.actions
export default fetchingSlice
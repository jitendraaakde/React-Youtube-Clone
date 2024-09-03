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

        }

    }
})
export const fetchingActions = fetchingSlice.actions
export default fetchingSlice
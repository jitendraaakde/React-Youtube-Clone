import { createSlice } from "@reduxjs/toolkit";

const sidebarToggleSlice = createSlice({
    name: 'sidebarToggle',
    initialState: {
        toggle: false,
        fetchCategory: 'Home',
        changeIcon: false
    },
    reducers: {
        toggleSidebar: (state) => {
            state.toggle = !state.toggle
        },
        changeCategory: (state, action) => {
            state.fetchCategory = action.payload
        },
        changeIcon: (state) => {
            state.changeIcon = !state.changeIcon
        }
    }
})
export const sidebarAction = sidebarToggleSlice.actions
export default sidebarToggleSlice
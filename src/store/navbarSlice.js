import { createSlice } from "@reduxjs/toolkit";

const sidebarToggleSlice = createSlice({
    name: 'sidebarToggle',
    initialState: { toggle: false },
    reducers: {
        toggleSidebar: (state) => {
            state.toggle = !state.toggle
        }
    }
})
export const sidebarAction = sidebarToggleSlice.actions
export default sidebarToggleSlice
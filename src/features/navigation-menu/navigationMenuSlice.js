import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    activeItem: "/",
}

export const navigationMenu = createSlice({
    name: 'navigationMenu',
    initialState,
    reducers: {
        hanleChangeActiveItem: (state, action) => {
            state.activeItem = action.payload;
        },
    },
})

export const { hanleChangeActiveItem } = navigationMenu.actions;
export default navigationMenu.reducer


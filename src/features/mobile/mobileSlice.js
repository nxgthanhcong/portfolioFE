import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isOpenMobileMenu: false,
}

export const mobileSlice = createSlice({
    name: 'mobile',
    initialState,
    reducers: {
        hanleChangeMobileMenuState: (state) => {
            state.isOpenMobileMenu = !state.isOpenMobileMenu;
        },
    },
})

export const { hanleChangeMobileMenuState } = mobileSlice.actions;
export default mobileSlice.reducer


import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isOpenCV: false,
}

export const cvSlice = createSlice({
    name: 'cv',
    initialState,
    reducers: {
        hanleOpenCV: (state) => {
            state.isOpenCV = true;
        },
        hanleCloseCV: (state) => {
            state.isOpenCV = false;
        },
    },
})

export const { hanleOpenCV, hanleCloseCV } = cvSlice.actions;
export default cvSlice.reducer


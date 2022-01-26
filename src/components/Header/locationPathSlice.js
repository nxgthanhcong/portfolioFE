import { createSlice } from "@reduxjs/toolkit";

const locationPath = createSlice({
    name: "locationPath",
    initialState: "/",
    reducers: {
        changeLocationPath: (state, action) => {
            state = action.payload
        }
    }
});

const { reducers, actions } = locationPath;
export const { changeLocationPath } = actions;
export default reducers;
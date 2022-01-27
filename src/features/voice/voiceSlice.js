import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    songName: "",
    menuItemText: "",
    isListenMusic: false,
    isPauseMusic: false,
    isOpenCamera: false,
}

export const voiceSlice = createSlice({
    name: 'voice',
    initialState,
    reducers: {
        handleVoiceSpeech: (state, action) => {

            alert(action.payload)

            if (action.payload.includes("bài")) {
                var songName = action.payload.split("bài")[1];
                state.songName = songName;
            }

            if (action.payload.includes("nghe nhạc")) {
                state.isListenMusic = true;
            }

            if (action.payload.includes("tắt nhạc")) {
                state.isListenMusic = false;
            }

            if (action.payload.includes("dừng nhạc")) {
                state.isPauseMusic = true;
            }

            if (action.payload.includes("tiếp tục nghe nhạc")) {
                state.isPauseMusic = false;
            }

            if (action.payload.includes("camera")) {
                state.isOpenCamera = true;
            }

            if (action.payload.includes("camera off")) {
                state.isOpenCamera = false;
            }

            if (action.payload.includes("menu")) {
                var itemText = action.payload.split("menu")[1];
                state.menuItemText = itemText.toLowerCase();
            }
        },
    },
})

export const { handleVoiceSpeech } = voiceSlice.actions;
export default voiceSlice.reducer


import locationPathReducer from "../components/Header/locationPathSlice";
import voiceReducer from "../features/voice/voiceSlice";
import { configureStore } from "@reduxjs/toolkit";


const rootReducer = {
    locationPath: locationPathReducer,
    voice: voiceReducer,
}

const store = configureStore({
    reducer: rootReducer,
});

export default store;
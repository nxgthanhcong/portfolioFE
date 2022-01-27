import voiceReducer from "../features/voice/voiceSlice";
import mobileReducer from "../features/mobile/mobileSlice";
import { configureStore } from "@reduxjs/toolkit";


const rootReducer = {
    voice: voiceReducer,
    mobile: mobileReducer,
}

const store = configureStore({
    reducer: rootReducer,
});

export default store;
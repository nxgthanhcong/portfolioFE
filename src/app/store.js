import voiceReducer from "../features/voice/voiceSlice";
import mobileReducer from "../features/mobile/mobileSlice";
import navigationMenuReducer from "../features/navigation-menu/navigationMenuSlice";
import { configureStore } from "@reduxjs/toolkit";


const rootReducer = {
    voice: voiceReducer,
    mobile: mobileReducer,
    navigationMenu: navigationMenuReducer,
}

const store = configureStore({
    reducer: rootReducer,
});

export default store;
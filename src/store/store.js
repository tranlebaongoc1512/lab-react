import { configureStore } from "@reduxjs/toolkit";
import filmSlice from "./features/filmSligce";
export const store = configureStore({
    reducer: {
        film: filmSlice.reducer,
    },
});
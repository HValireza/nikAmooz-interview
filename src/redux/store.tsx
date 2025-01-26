import { configureStore } from "@reduxjs/toolkit";
import userreducer from "./userSlice";

const store = configureStore({
    reducer:{
        user:userreducer
    }
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
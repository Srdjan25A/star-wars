import { configureStore } from "@reduxjs/toolkit";
import filmSlice from "./filmSlice"
import characterSlice from "./characterSlice"
import planetSlice from "./planetSlice"

const store = configureStore({
    reducer : {
        filmStore: filmSlice,
        characterStore: characterSlice,
        planetStore: planetSlice
    }
})
export default store
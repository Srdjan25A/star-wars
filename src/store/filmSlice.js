import { createSlice } from "@reduxjs/toolkit";


const filmSlice = createSlice ({
    name: 'film',
    initialState: {
        film: null
    },
    reducers: {
        saveFilmContentAction : (state, action) =>{
            state.film = action.payload
        }
    }
        
})
export const {saveFilmContentAction} = filmSlice.actions
export default filmSlice.reducer
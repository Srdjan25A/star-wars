import { createSlice } from "@reduxjs/toolkit";


const characterSlice = createSlice ({
    name: 'character',
    initialState: {
        charactersByFilm: {}
    },
    reducers: {
        setCharactersAction : (state, action) => {
            const { filmId, characters } = action.payload
            
            state.charactersByFilm[filmId] = characters
        }
    }
})
export const {setCharactersAction, clearCharactersAction} = characterSlice.actions
export default characterSlice.reducer
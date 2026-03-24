import { createSlice } from "@reduxjs/toolkit";

const planetSlice = createSlice({
    name: 'planet',
    initialState: {
        planet: null
    },
    reducers: {
        setPlanetAction : (state, action) => {
            state.planet = action.payload
            console.log(state.planet)
        }
    }
})

export const {setPlanetAction} = planetSlice.actions
export default planetSlice.reducer
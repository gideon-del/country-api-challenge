import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    countryFilter : '',
    dark:localStorage.getItem('theme') || false,
    regionFilter:''
}
const countrySlice =createSlice({
    name:'countryFilter',
    initialState,
    reducers:{
        filterReducer(state,action) {
         state.countryFilter = action.payload.val
        },
        toggleTheme(state){
            state.dark = !state.dark;
            localStorage.setItem('theme',state.dark)
        },
        regionReducer(state,action){
            state.regionFilter = action.payload.val
        }
    }
})
export const countryActions = countrySlice.actions
export default countrySlice.reducer
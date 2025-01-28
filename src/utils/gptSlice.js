import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        movieNames: null,
        movieResults: null,
        responseFlag: null
    },
    reducers: {
        toggleGptSearchView : (state) => {
            state.showGptSearch = !state.showGptSearch
        },
        addGptMovieResult: (state, action) => {
            const {movieNames, movieResults} = action.payload
            state.movieNames = movieNames
            state.movieResults = movieResults
        },
        addResponseFlag : (state, action) => {
            state.responseFlag = action.payload
        },
        removeGpt: (state, action) => {
            return {
                showGptSearch: false,
                movieNames: null,
                movieResults: null,
                responseFlag: null
            }
        }

    }
})

export const { toggleGptSearchView, addGptMovieResult, addResponseFlag, removeGpt} = gptSlice.actions

export default gptSlice.reducer
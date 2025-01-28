import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        lang: "en"
    },
    reducers: {
        changeLanguage: (state, actions) => {
            state.lang = actions.payload
        },
        removeConfig: (state, action) => {
            return {
                lang: "en"
            }
        }
    }
})

export const { changeLanguage, removeConfig } = configSlice.actions

export default configSlice.reducer
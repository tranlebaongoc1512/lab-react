import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    draftFilm: null,
}
const filmSlice = createSlice({
    name: 'film',
    initialState: initialState,
    reducers: {
        saveFilm: (state, action) => {
            state.draftFilm = action.payload;
        },
        clearFilm: (state, action) => {
            state.draftFilm = null;
        }
    },
});

export const { saveFilm, clearFilm } = filmSlice.actions;

export default filmSlice;
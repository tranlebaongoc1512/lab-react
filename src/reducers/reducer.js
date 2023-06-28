import { SAVE_FILM, CLEAR_FILM } from "../contants/constants"

const initState = {
    draftFilm: null,
}

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case SAVE_FILM:
            return {
                ...state,
                draftFilm: action.payload,
            };
        case CLEAR_FILM:
            return {
                ...state,
                draftFilm: null,
            };
        default:
            return state;
    }
}

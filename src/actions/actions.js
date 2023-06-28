import { SAVE_FILM, CLEAR_FILM } from "../contants/constants";

export const saveFilm = payload => {
    return {
        type: SAVE_FILM,
        payload
    }
}

export const clearFilm = () => {
    return {
        type: CLEAR_FILM,
    }
}

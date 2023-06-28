import api from "./api";
export const getListOfFilms = async () => {
    const response = await api.get('/films');
    return response.data;
};
export const getSearchList = async (search) => {
    const response = await api.get('/films', {
        params: {
            title: search,
        }
    });
    return response.data;
};
export const getFilm = async (id) => {
    const response = await api.get(`/films/${id}`);
    return response.data;
};
export const addFilm = async (film) => {
    const response = await api.post('/films', film);
    return response.data;
};
export const updateFilm = async (id, film) => {
    const response = await api.put(`/films/${id}`, film);
    return response.data;
};
export const deleteFilm = async (id) => {
    const response = await api.delete(`/films/${id}`);
    return response.data;
};
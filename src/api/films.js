import api from "./api";
export const getListOfFilms = async () => {
    const response = await api.get('/films');
    return response.data;
};
export const getFilmsByPage = async (page, numberPerPage) => {
    const response = await api.get('/films', {
        params: {
            page: page,
            limit: numberPerPage,
        }
    });
    return response.data;
};
export const getFilm = async (id) => {
    const response = await api.get(`/films/${id}`);
    console.log(response.data);
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
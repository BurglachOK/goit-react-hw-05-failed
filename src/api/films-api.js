import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
    headers: {
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWYyZmNkYjc3NjNkMGMxMWIxNGI4YzM3OGUxYTc0NyIsIm5iZiI6MTcyNDg3OTI5MC4yMTE3NjMsInN1YiI6IjY2Y2Y5MDdhZThhYTJiYTM5MDExOTNlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4a2zeS8lEYE5XzKvW6ulF6nZzJRqXFJHBJdr0dXw-gM",
    },
};

export const fetchTrendingMovies = async () => {
    const response = await axios.get("trending/movie/day", options);
    return response.data;
};

export const fetchMovieByQuery = async (query) => {
    const response = await axios.get(
        `search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
        options
    );
    return response.data;
};

export const fetchMovieDetails = async (id) => {
    const response = await axios.get(`movie/${id}`, options);
    return response.data;
};

export const fetchMovieCast = async (id) => {
    const response = await axios.get(`movie/${id}/credits`, options);
    return response.data.cast;
};

export const fetchMovieReview = async (id) => {
    const response = await axios.get(`movie/${id}/reviews`, options);
    return response.data.results;
};
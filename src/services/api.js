import axios from "axios";

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGM0NzE0M2I5NjkxY2Y0ODJjZjRjZDJjY2U5ZTE0MCIsIm5iZiI6MTczOTAyMjc3Mi4yOTIsInN1YiI6IjY3YTc2MWI0MjY5ZjBiYzRmNWYxMWIzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LsS3H74U-lgrQk4Wy0ldDYvMngOvaz5RReOmWq0NOgk";
const API_URL = 'https://api.themoviedb.org/3';

const axiosInstance  = axios.create({
    baseURL: API_URL,
    headers: {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json"
    },
});

export async function fetchTrendingMovies() {
    const response = await axiosInstance.get("/trending/movie/day");
    return response.data.results;
}

export async function searchMovies(query) {
    const response = await axiosInstance.get("/search/movie", {
        params: {query},
    });
    return response.data.results;
}

export async function fetchMovieDetails(movieId) {
    const response = await axiosInstance.get(`/movie/${movieId}`);
    return response.data;
}

export async function fetchMovieCast(movieId) {
    const response = await axiosInstance.get(`/movie/${movieId}/credits`);
    return response.data.cast;
}

export async function fetchMovieReviews(movieId) {
    const response = await axiosInstance.get(`/movie/${movieId}/reviews`);
    return response.data.results;
}

import * as axios from 'axios';
import { token } from '../auth';

const apiMovie = axios.create({
    baseURL: 'https://api.themoviedb.org/4'
});

apiMovie.interceptors.request.use( req => {
    req.headers['Authorization'] = token;
    return req;
})

export default apiMovie;

export const apiMovieMap = m => ({
    id: m.id,
    title: m.title,
    img: `https://image.tmdb.org/t/p/w500${m.poster_path}`,
    details: `${m.release_date} | ${m.vote_average}/10 | ${m.vote_count}`,
    description: m.overview 
  });
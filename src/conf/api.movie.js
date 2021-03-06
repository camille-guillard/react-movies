import * as axios from 'axios';

const apiMovie = axios.create({
    baseURL: 'https://api.themoviedb.org/4'
});

apiMovie.interceptors.request.use( req => {
    req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzJiZmI3YWRiNmJjNzMwZTNkMjZiODVmYThmNjNlZSIsInN1YiI6IjYwNDNhYzhkNTI1OGFlMDAyYTUzOTViMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CebKRH9PhEmIA02kUjXIbsZCq8RogwixOYhnl665EDw';
    return req;
})

export default apiMovie;


export const apiMovieMap = m => ({
    title: m.title,
    img: `https://image.tmdb.org/t/p/w500${m.poster_path}`,
    details: `${m.release_date} | ${m.vote_average}/10 | ${m.vote_count}`,
    description: m.overview 
  });
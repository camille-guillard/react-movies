import * as axios from 'axios';

const apiFirebase = axios.create({
    baseURL: 'https://react-movies-d7f21-default-rtdb.firebaseio.com/'
});

export default apiFirebase;
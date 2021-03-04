import React, { Component } from 'react';
import { Header, MovieList, MovieDetails } from './components';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: [{
        title: 'The Godfather',
        img: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY209_CR3,0,140,209_AL_.jpg',
        details: 'R | 175 min | Crime, Drama',
        description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.'
      }, {
        title: 'Apocalypse Now',
        img: 'https://m.media-amazon.com/images/M/MV5BZTNkZmU0ZWQtZjQzMy00YTNmLWFmN2MtZGNkMmU1OThmMGYwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX140_CR0,0,140,209_AL_.jpg',
        details: 'R | 147 min | Drama, War',
        description: 'During the Vietnam War, Captain Willard is sent on a dangerous mission into Cambodia to assassinate a renegade Colonel who has set himself up as a god among a local tribe.'
      }, {
        title: 'The Lord of the Rings',
        img: 'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY209_CR0,0,140,209_AL_.jpg',
        details: 'PG-13 | 201 min | Action, Adventure, Drama',
        description: 'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.'
      }, {
        title: 'Gladiator',
        img: 'https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY209_CR0,0,140,209_AL_.jpg',
        details: 'R | 155 min | Action, Adventure, Drama',
        description: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.'
      }],
      selectedMovie: 0
    }
  }

  updateSelectedMovie = (title) => {
    const index = this.state.movies.findIndex( (m) => {
      return title === m.title;
    });
    this.setState({
      selectedMovie: index
    })
  }

  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        <div className="d-flex flex-row flex-fill pt-4 p-2" >
          <MovieList movies={ this.state.movies } updateSelectedMovie={ this.updateSelectedMovie} />
          <MovieDetails movie= { this.state.movies[this.state.selectedMovie] } />
        </div>
      </div>
    );
  }
}

export default App;
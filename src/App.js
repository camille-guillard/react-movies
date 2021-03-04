import logo from './logo.svg';
import './App.css';
import { Header, MovieDetails, MovieList } from './components'

function App() {
  return (
    <div className="App d-flex flex-column">
      <Header />
      <div className="d-flex flex-row flex-fill pt-4 p-2">
        <MovieList />
        <MovieDetails />
      </div>
    </div>
  );
}

export default App;

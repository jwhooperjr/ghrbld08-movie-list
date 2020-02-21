import React from 'react';
// import Search from './Search.js';
import MovieList from './MovieList.js';
// import AddMovie from './AddMovie.js';
import exampleMovieData from '../data/exampleMovieData.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: exampleMovieData
    }

  }
  
  render() {
    return (
      <div>
        <MovieList list={this.state.movies} another={'test'}/>
      </div>
    )
  }
}

export default App;
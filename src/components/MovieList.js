import MovieListEntry from './MovieListEntry.js';

var MovieList = ( movies ) => (
    <div className="movie-list">
    {movies.map((movie, index) => (
      <MovieListEntry/>
    ))}
  </div>
);

VideoList.propTypes = {
    movies: PropTypes.array.isRequired
  };

  export default MovieList;
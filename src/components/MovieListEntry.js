var MovieListEntry = ( movie ) => (
  <div className="movie-list-entry">{movie}</div>
);

VideoListEntry.propTypes = {
    movie: PropTypes.object.isRequired
  };

  export default MovieListEntry;
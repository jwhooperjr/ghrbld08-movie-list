import React from 'react';
import MovieListEntry from './MovieListEntry.js';

var MovieList = ( props ) => {
    console.log(props);
    return (
    <div>
        {props.list.map((movie, index) => (
        <MovieListEntry
         movie={props.list[index].title}
         />
        ))}
    </div>
    )
};

// MovieList.propTypes = {
//     movies: PropTypes.array.isRequired
//   };

  export default MovieList;
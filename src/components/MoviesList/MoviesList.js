import React from 'react';

import Movie from '../Movie/Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {
  if(!props.movies){
    return 
  }
  return (
    <>
    <ul className={classes.albums}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.imdbID}
          id={movie.imdbID}
          title={movie.Title}
          year={movie.Year}
          poster={movie.Poster}
        />
      ))}
    </ul>
    </>
  );
};

export default MovieList;
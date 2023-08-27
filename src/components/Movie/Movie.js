import React from 'react'
import { useNavigate } from 'react-router-dom';
import classes from './Movie.module.css'

const Movie = (props) => {


  const navigate = useNavigate();
  const handleMovieClick = (id) => navigate(`/movies/${props.id}`);


    return (
        
  <div onClick={() => handleMovieClick(props.id)}>
  <div className={classes.album}>
    <img className={classes['album__artwork']} src={props.poster}/>
   
  </div>


</div>

    );
}

export default Movie;

import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import MovieData from '../MovieData/MovieData';


const MovieDetails = () => {
    const params = useParams();


const [movieData , setMovieData] = useState();
const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Function to handle the search
        const handleSearch = async () => {
          try {
            // Perform the search using the searchText
            setIsLoading(true)
            const resp = await fetch(`https://www.omdbapi.com/?apikey=5dc8724b&i=${params.id}`);
            const data = await  resp.json();
          
            setMovieData(data)
            setIsLoading(false)
          } catch (error) {
            console.error('Error during search:', error);
          }
        };
    
        // Call the handleSearch function when searchText changes
        handleSearch();
      }, [params.id]);


   


    return (
        <>
        {isLoading && <p>Loading...</p>}
        {!isLoading && movieData && <MovieData movieData={movieData} />}
 
     </>
    );
}

export default MovieDetails;

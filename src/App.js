import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import MoviesList from './components/MoviesList/MoviesList';
import MovieDetails from './components/MovieDetails/MovieDetails';
import { useNavigate } from 'react-router-dom';

function App() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTxt, setSearchTxt] = useState('')

  const [searchInput, setSearchInput] = useState('')




  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true)
        const resp = await fetch(`https://www.omdbapi.com/?apikey=5dc8724b&s=${searchTxt}`);
        const data = await  resp.json();
        
           setMovies(data.Search)
           
           setIsLoading(false)
      } catch (error) {
        console.error('Error during search:', error);
      }
    };
    fetchMovies();
  }, [searchInput]);
    


/*     async function fetchMovies(){
      
      setIsLoading(true)
       const resp = await fetch(`https://www.omdbapi.com/?apikey=5dc8724b&s=${searchTxt}`);
       const data = await  resp.json();
       
       console.log(data.Search)
          setMovies(data.Search)
          
          setIsLoading(false)
        
      } */


    
    const handleInputChange = (event) => {
     
      setSearchTxt(event.target.value);
    };

    const navigate = useNavigate();
    const handleClick = ()=>{
      
      setSearchInput(searchTxt)
      navigate(-1)

    }

  return (
  

    <div className="App">


    <div className='search-container'>
        <input className='search-field' type="search" plaseholder="search" value={searchTxt} onChange={handleInputChange} />
        
        <button className='search-btn' type="button"  onClick={handleClick} > <i className="fa fa-search" aria-hidden="true"></i> </button>
          
          </div>
   

     <Routes>

          <Route  path="/" element={isLoading ? <p>Loading...</p> : <MoviesList movies={movies}  /> } /> 

          <Route path="/movies/:id" element={<MovieDetails/>} /> 
        </Routes>
        
      
    </div>
  );
}

export default App;

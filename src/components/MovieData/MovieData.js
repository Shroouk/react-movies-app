import React, { useState , useEffect} from 'react';
import classes from './MovieData.module.css'

const MovieData = (props) => {
 

  const [data, setData] = useState();


  useEffect(() => {
    // Function to handle the search
    const handleSearch = async () => {
      try {
        
        setData(props.movieData)
       
      } catch (error) {
        console.error('Error during search:', error);
      }
    };

    // Call the handleSearch function when searchText changes
    handleSearch();
  }, []);


  let content = <p>loading ... </p>

  if(data){
    content = (
      <div>
      <div className= {classes["movie_card"]}  >
      <div className= {classes["info_section"]} >
      <div className= {classes["movie_header"]} >
         <img className= {classes["locandina"]}  src={data.Poster}/> 
      <h1>{data.Title}</h1>
        <h4>{data.Year}, {data.Director}</h4>
        <span className= {classes["minutes"]} >{data.Runtime}</span>
        <p className= {classes["type"]} >
        {
          data.Genre
        }
       </p>
        <p className= {classes["text"]} > {data.Plot} </p>

        <p className= {classes["actors"]} >
        {
          data.Actors
        }
       </p>
      
      </div>
    
      <div className= {classes["movie_social"]} >
        <ul>
          <li><i className="fa fa-heart" aria-hidden="true"></i></li>
          <li><i className="fa fa-comment" aria-hidden="true"></i></li>
          <li><i className="fa fa-share" aria-hidden="true"></i></li>
        </ul>
      </div>
      </div>
      <div className= {classes["blur_back bright_back"]} ></div>
      </div>
  
          </div>
  )
  }
  

 
  
    return content;
}

export default MovieData;

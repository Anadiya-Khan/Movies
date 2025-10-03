import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import "../css/Home.css";
import {searchMovies , getPopularMovies} from "../Services/api";


// depandancy array is use for if anything inside of the depandency will change it will run the code  (() =>{})
const Home = () => {
    const [searchquery , setSearchQuery] = useState("");
    const [movies , setMovie] = useState([]);
    const [error,setError] = useState(null);
    const [loading , setLoading] = useState(true);

    useEffect(() =>{
      const loadPopularMovies = async () =>{
        try{
          const popularMovies = await getPopularMovies();
          setMovie(popularMovies);
        }catch(err){
          console.log(err);
          setError("Failed to load movies...");
        } finally {
          setLoading(false);
        }
      };
      loadPopularMovies();
    }, []);
    const handleSearch = async (e) =>{
        // alert(searchquery);
        e.preventDefault(); //for not reloading the page after submit button clicked
        // setSearchQuery("")  // for not having anything on search bar 
        if(!searchquery.trim()) return
        if(loading) return

        setLoading(true)
        try {
           const searchResult =await searchMovies(searchquery)
           setMovie(searchResult)
           setError(null)
        } catch(err) {
          console.log("Failed to search movies...")
        } finally {
          setLoading(false)
        }
};
  return (
      <div className='home'>
        <form onSubmit={handleSearch} className='search-form'>
          <input type='text'
           placeholder='Search for movies...' 
           className='search-input'
           value={searchquery}
           onChange={(e) => setSearchQuery(e.target.value)}
           />
          <button type='submit' className='search-button'>Search</button>
        </form>

        {error && <div className='error-message'>{error}</div>}

        {loading ? (
          <div className='loading'>Loading</div>
        ) : (
        <div className='movies-grid'>
            {movies.map((movie) => (
                // movie.title.toLowerCase().startsWith(searchquery) &&   //the state will be the same and everything else will be re-render
                <MovieCard movie={movie} key={movie.id}/>   //movie from card and another one is a var
                
            ))}
        </div>
        )}
    </div>
  );
};

export default Home

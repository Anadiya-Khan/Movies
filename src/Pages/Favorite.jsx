import React from 'react'
import "../css/Favorites.css"
import {useMovieContext } from "../Context/MovieContext.jsx";
import MovieCard from "../components/MovieCard"

const Favorite = () => {
  const { favorites } = useMovieContext();
  if(favorites){
    return (
      <div className='favorites'>
        <h2>Your Favorites</h2>
        <div className='movie-grid'>
          {favorites.map((movie)=>(
            <MovieCard movie={movie} key={movie.id}/>
          ))}
        </div>
      </div>
    )
  }
  return (
    <div className='favorites-empty'>
      <h2>No favourite movies yet</h2>
      <p>Start adding fovourites movies and they will appear here</p>
    </div>
  )
}

export default Favorite

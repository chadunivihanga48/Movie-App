import React from 'react'
import '../css/Favourite.css'
import {useMovieContext} from "../context/MovieContext"
import MovieCard from "../components/MovieCard"

function Favourite() {
    const {favourite} = useMovieContext();
    
    console.log('Current favorites:', favourite)

    if(favourite && favourite.length > 0){
      return (
        <div className = "favourite">
          <h2>Your Favourites</h2>
          <div className = "movies-grid">
            {favourite.map((movie) => (
              <MovieCard movie={movie} key={movie.id}/>
            ))}
          </div>
        </div>
      );
    }
  return (
    <div className = "favourite-empty">
        <h2>No Favourite Movies Yet</h2>
        <p>Start adding movies to your favourites and they will appear here</p>

    </div>
  )
}

export default Favourite
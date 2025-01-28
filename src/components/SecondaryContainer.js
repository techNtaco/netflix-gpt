import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)

  return (
    <div className='pt-5 bg-black mt:0 md:-mt-56'>
      {movies?.nowPlayingMovies && <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />}
      {movies?.popularMovies && <MovieList title={"Popular Movies"} movies={movies?.popularMovies} />}
      {movies?.topRatedMovies && <MovieList title={"Top Rated Movies"} movies={movies?.topRatedMovies} />}
      {movies?.upcomingMovies && <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />}
    </div>
  )
}

export default SecondaryContainer
import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestions = () => {
  const {movieResults, movieNames, responseFlag} = useSelector(store => store.gpt)
  console.log(responseFlag)
  if(responseFlag === false){
    return(
      <div className='p-4 m-4 bg-black text-white relative bg-opacity-85 z-20'>
        "The model seems to be overloaded right now. Guess that's the price of using the free tier for a hobby project. Try again later!"
      </div>
    )
  }

  if(!movieNames) return null
  console.log(movieNames)
  console.log(movieResults)
  return (
    <div className='p-4 m-4 bg-black text-white relative bg-opacity-85 z-20'>
      {movieNames.map((movie, index) => <MovieList key={movie} title={movie} movies={movieResults[index].results} />)}
      
    </div>
  )
}

export default GptMovieSuggestions
import React, { useRef } from 'react'
import { API_OPTIONS, BACKGROUND_IMAGE } from '../utils/constants'
import lang from "../utils/languageConstants"
import { useDispatch, useSelector } from 'react-redux'
import model from '../utils/gemini'
import { MOVIE_SEARCH_API } from '../utils/constants'
import { addGptMovieResult, addResponseFlag } from '../utils/gptSlice'

const GptSearchBar = () => {
  const searchText = useRef(null)
  const dispatch = useDispatch()
  const langKey = useSelector(store => store.config.lang)
  const getMovieSearchApiUrl = (query) => {
  const baseUrl = MOVIE_SEARCH_API
  const params = new URLSearchParams({
        query: query,
        include_adult: "true",
        page: "1"
    });
  return `${baseUrl}?${params.toString()}`
};

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(getMovieSearchApiUrl(movie), API_OPTIONS)
    const json = await data.json()
    return json
  }

  const handleGptSearchClick = async () => {
    try {
      const prompt = 
        "Act as a movie recommendation system and suggest 5 movies for the query " +
        searchText.current.value +
        " in a comma-separated way like the example ahead. Example result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya.";
    
        const result = await model.generateContent(prompt);
        const responseText = await result.response.text();
        
        const movies = responseText.split(",").map(movie => movie.trim());
        if (movies.length !== 5) {
          console.error("Invalid Response");
          throw new Error("Invalid Response");
        }
        console.log(movies)
        const promiseArray = movies.map(movie => searchMovieTMDB(movie))
        const tmdbResults = await Promise.all(promiseArray)
        dispatch(addGptMovieResult({movieNames: movies ,movieResults: tmdbResults}))
        dispatch(addResponseFlag(true))

    } catch (error) {
      console.error("The model seems to be overloaded right now. Guess that's the price of using the free tier for a hobby project. Try again later!");
      dispatch(addResponseFlag(false))
    }
  };
  
  
  return (
    <div className='pt-2 flex justify-center'>
        <div className="fixed">
            <img 
                src= {BACKGROUND_IMAGE}
                alt="netflix-background"
                className='h-screen object-cover sm:h-full'
            />
      </div>
        <form className='w-full md:w-1/2 grid grid-cols-12 relative mt-[30%] md:mt-0 z-10' 
            onSubmit={(e) => e.preventDefault()}
        >
            <input
                ref={searchText}
                type='text' 
                className='p-2 m-4 col-span-9 rounded-lg' 
                placeholder={lang[langKey].gptSearchBarPlaceholder}
            />
            <button 
                className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3'
                onClick={handleGptSearchClick}
            >
                {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar
import { useDispatch, useSelector } from 'react-redux'
import { addPopularMovies } from '../utils/moviesSlice'
import { useEffect } from 'react'
import { POPULAR_API, API_OPTIONS } from '../utils/constants'

const usePopularMovies = () => {
    // Fetch Data From TMDB API and update store.
    const dispatch = useDispatch()
    // Memoization
    const popularMovies = useSelector(store => store.movies.popularMovies)


    const getUsePopularMovies = async () => {
    const data = await fetch(POPULAR_API, API_OPTIONS)
    const json = await data.json()
    dispatch(addPopularMovies(json.results))
    }

    useEffect(()=>{
        !popularMovies && getUsePopularMovies()
    }, [])
}

export default usePopularMovies
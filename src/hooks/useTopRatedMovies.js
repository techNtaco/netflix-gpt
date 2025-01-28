import { useDispatch } from 'react-redux'
import { addTopRatedMovies } from '../utils/moviesSlice'
import { useEffect } from 'react'
import { TOP_RATED_API, API_OPTIONS } from '../utils/constants'

const useTopRatedMovies = () => {
    // Fetch Data From TMDB API and update store.
    const dispatch = useDispatch()

    const getUseTopRatedMovies = async () => {
    const data = await fetch(TOP_RATED_API, API_OPTIONS)
    const json = await data.json()
    dispatch(addTopRatedMovies(json.results))
    }

    useEffect(()=>{
        getUseTopRatedMovies()
    }, [])
}

export default useTopRatedMovies
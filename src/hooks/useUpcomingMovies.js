import { useDispatch } from 'react-redux'
import { addUpcomingMovies } from '../utils/moviesSlice'
import { useEffect } from 'react'
import { UPCOMING_API, API_OPTIONS } from '../utils/constants'

const useUpcomingMovies = () => {
    // Fetch Data From TMDB API and update store.
    const dispatch = useDispatch()

    const getUseUpcomingMovies = async () => {
    const data = await fetch(UPCOMING_API, API_OPTIONS)
    const json = await data.json()
    dispatch(addUpcomingMovies(json.results))
    }

    useEffect(()=>{
        getUseUpcomingMovies()
    }, [])
}

export default useUpcomingMovies
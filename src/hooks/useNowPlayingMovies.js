import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/moviesSlice'
import { useEffect } from 'react'
import { NOW_PLAYING_API, API_OPTIONS } from '../utils/constants'

const useNowPlayingMovies = () => {
    // Fetch Data From TMDB API and update store.
    const dispatch = useDispatch()
    // Memoization


    const getNowPlayingMovies = async () => {
        const data = await fetch(NOW_PLAYING_API, API_OPTIONS)
        const json = await data.json()
        dispatch(addNowPlayingMovies(json.results))
    }

    useEffect(()=>{
        getNowPlayingMovies()
    }, [])
}

export default useNowPlayingMovies
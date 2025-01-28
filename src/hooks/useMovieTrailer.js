import { useEffect } from 'react'
import { API_OPTIONS, getTrailerApiUrl } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/moviesSlice'

const useMovieTrailer = (movieId) => {
    // Fetch trailer video && updating the store with trailer video data.
    const dispatch = useDispatch()
    // Memoization
    const trailerVideo = useSelector(store => store.movies.trailerVideo)
    const getMovieVideos = async () => {
        const trailerAPI = getTrailerApiUrl(movieId) 
        const data = await fetch(trailerAPI, API_OPTIONS)
        const json = await data.json()
        let trailer = json.results.find(video => video.type === "Trailer" & video.site === "YouTube")
        if(!trailer){
            trailer = json.results.find(video => video.site === "YouTube")
        }
        dispatch(addTrailerVideo(trailer))
    }

    useEffect(() => {
        !trailerVideo && getMovieVideos()
    }, [])
}

export default useMovieTrailer
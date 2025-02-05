import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    if(!movies) return
    const mainMovie = movies.length > 0 ? movies[Math.floor(Math.random() * movies.length)] : undefined
    const {original_title, overview, id} = mainMovie
    console.log(original_title, overview, id)
    return (
    <div className='bg-black pt-[30%] md:pt-0 md:bg-inherit'>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer
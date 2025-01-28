import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null
  return (
    <div className='w-52 px-4 relative z-20'>
        <img 
            alt='Movie Card'
            src={IMG_CDN_URL + posterPath}

        />
    </div>
  )
}

export default MovieCard
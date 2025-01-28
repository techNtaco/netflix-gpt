import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[15%] px-12 absolute w-screen aspect-video text-white bg-gradient-to-r from-black'>
        <h1 className='text-4xl md:text-6xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
        <div className='pt-6 md:pt-0'>
            <button className='bg-white text-black py-3 px-12 text-xl rounded-lg hover:bg-opacity-80'>▶ Play</button>
            <button className='hidden md:inline-block mx-2 bg-gray-500 text-white py-3 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-70'>ℹ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
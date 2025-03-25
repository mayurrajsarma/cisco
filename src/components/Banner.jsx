import React from 'react'
import {BANNER_IMG} from "../utils/constants"

const Banner = () => {
  return (
    <div>
        <div className='absolute text-white top-1/2 transform -translate-y-1/2 left-30'>
            <p className='text-6xl font-semibold'>Making AI work for you</p>
            <p className='mt-5'>Cisco AI is where the AI hype ends and meaningful help begins.</p>
            <button className='text-black font-semibold bg-white rounded-4xl relative px-5 py-2 mt-5'>Explore Cisco AI</button>
        </div>
        <div className=''>
            <img src={BANNER_IMG}/>
        </div>
    </div>
  )
}

export default Banner
import React, { useEffect, useState } from 'react'
import client from '../../ciscodemo/lib/client'
import { urlForImage } from '../../ciscodemo/lib/image';

const Banner = () => {

  
  const [bannerData,setBannerData] = useState([]) ;
  // const {image} = bannerData.bannerImage ;
  useEffect(()=> {
    client.fetch('*[_type == "banner"][0]')
    .then((res)=> {
      console.log(res) ;
      setBannerData(res)
    }) ;

    console.log(bannerData.title) ;
  },[]);

  return bannerData &&  (
    <div className='relative '>
        <div className='absolute text-white top-1/2 transform -translate-y-1/2 left-30 hidden lg:block'>
            <p className='text-6xl font-semibold'>{bannerData.title}</p>
            <p className='mt-5'>{bannerData.description}</p>
            <button  onClick={() => window.location.href = bannerData.btnUrl} className='text-black font-semibold bg-white hover:bg-gray-200 cursor-pointer rounded-4xl relative px-5 py-3 mt-5'>{bannerData.btnText}</button>
        </div>
        <p className='absolute text-white text-5xl font-bold top-10 left-8 md:top-10 md:left-8 lg:bottom-10 lg:right-8 lg:top-auto lg:left-auto  '>CISCO LIVE!</p>
        <div className=''>
            {bannerData.bannerImage && <img className='w-full h-130' src={urlForImage(bannerData.bannerImage).url()} alt="banner image"/>}
        </div>
    </div>
  )
}

export default Banner
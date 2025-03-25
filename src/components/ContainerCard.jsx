import React from 'react'
import { urlForImage } from '../../ciscodemo/lib/image'

const ContainerCard = ({ image, title, description }) => {
    //console.log("Hello") ;
  return (
    
    <div className='mt-14'>
        <div className="max-w-xs bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <img 
                //src="https://www.cisco.com/content/dam/cisco-cdc/site/images/photography/homepage/homepage-featuredstory-xdr-global-1200x675.png" 
                src={urlForImage(image).url()}
                alt="image" 
                className="w-32 h-32 object-cover rounded-md" 
            />
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="text-gray-600 text-sm text-center mt-2">{description}</p>
        </div>
    </div>
  )
}

export default ContainerCard
import React from 'react'
import { urlForImage } from '../../ciscodemo/lib/image'

const ContainerCard = ({ image, title, description }) => {
    //console.log("Hello") ;
  return (
    
    <div className='mt-14'>
        <div className="max-w-[410px] bg-white rounded-lg shadow-md p-4  ">
            <img 
                 
                src={urlForImage(image).url()}
                alt="image" 
                className="w-100 h-60 object-cover rounded-md" 
            />
            <h3 className="mt-4 text-xl ">{title}</h3>
            <p className="text-gray-600 text-md mt-4">{description}</p>
        </div>
    </div>
  )
}

export default ContainerCard
import React from 'react'
import { urlForImage } from '../../ciscodemo/lib/image'

const ContainerCard = ({ image, title, description, linktext, linkURL }) => {
    //console.log("Hello") ;
  return (
    
    <div className='mt-14'>
        <div className="max-w-[410px] bg-white rounded-lg shadow-md p-4  h-[500px] flex flex-col justify-between">
            <img 
                 
                src={urlForImage(image).url()}
                alt="image" 
                className="w-100 h-60 object-cover rounded-md" 
            />
            <h3 className="mt-4 text-xl ">{title}</h3>
            <p className="text-gray-600 text-lg mt-4">{description}</p>
            <a 
              href={linkURL} 
              className="mt-4 inline-block text-blue-500 hover:underline text-md font-medium"
            >{linktext}</a>
        </div>
    </div>
  )
}

export default ContainerCard
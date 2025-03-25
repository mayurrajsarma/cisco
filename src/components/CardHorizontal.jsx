import React from 'react'
import { urlForImage } from '../../ciscodemo/lib/image';

const CardHorizontal = ({ image, title, description, buttonText }) => (
    <div className='mt-14'>
        <div className="flex max-w-screen  rounded-lg  overflow-hidden ">
            <div className='w-180'>
                <img src={urlForImage(image).url()} alt={title} className="w-145 object-cover" />
            </div>
            <div className="p-4 flex flex-col justify-center bg-gray-100 w-145 ">
                <h3 className="text-3xl">{title}</h3>
                <p className="text-gray-600 text-lg mt-2">{description}</p>
                <div>
                    <button className="w-auto mt-4 py-2 px-4 text-md font-semibold rounded-4xl border text-blue-500 border-blue-500 hover:text-blue-600 transition">
                    {buttonText}
                </button>
                </div>
            </div>
        </div>
    </div>
  );
  
  export default CardHorizontal;
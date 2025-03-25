import React from 'react'
import {HCard_img1} from "../utils/constants"

const CardHorizontal = ({ image, title, description, buttonText }) => (
    <div className='mt-14'>
        <div className="flex max-w-lg  rounded-lg  overflow-hidden ">
            <img src={HCard_img1} alt={title} className="w-40 object-cover" />
            <div className="p-4 flex flex-col justify-center bg-gray-100">
                <h3 className="text-lg font-semibold">Break new ground in AI with Cisco U.</h3>
                <p className="text-gray-600 text-sm mt-2">Be AI-ready with free Cisco U. tutorials and meet the future head-on.</p>
                <button className="mt-4 py-2 text-sm rounded-md border border-blue-500 hover:bg-blue-600 transition">
                Explore Cisco U
                </button>
            </div>
        </div>
    </div>
  );
  
  export default CardHorizontal;
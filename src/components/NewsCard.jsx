import React from 'react'

const NewsCard = ({ header, title, description, btnText, linkUrl }) => {
  return (
    <div className='mt-5 mb-25'>
        <div className="max-w-md  rounded-lg  overflow-hidden ">
            <div className="py-2 font-semibold">{header}</div>
            <div className="">
                <h3 className="text-lg">{title}</h3>
                <p className="text-gray-600 text-lg mt-2 pr-4">{description}</p>
                <a 
                    href={linkUrl} 
                    className="mt-4 inline-block text-blue-500 hover:underline text-md font-medium"
                >{btnText}</a>
            </div>
        </div>
    </div>
  )
}

export default NewsCard
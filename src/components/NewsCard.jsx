import React from 'react'

const NewsCard = ({ header, title, description, btnText, linkUrl }) => {
  return (
    <div className='mt-5'>
        <div className="max-w-md  rounded-lg  overflow-hidden">
            <div className="py-2 font-semibold">{header}</div>
            <div className="py-4">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-gray-600 text-sm mt-2">{description}</p>
                <a 
                    href={linkUrl} 
                    className="mt-4 inline-block text-blue-500 hover:underline text-sm font-medium"
                    target="_blank" 
                    rel="noopener noreferrer"
                >{btnText}</a>
            </div>
        </div>
    </div>
  )
}

export default NewsCard
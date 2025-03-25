import React from 'react'

const NewsCard = ({ header, title, description, linkText, linkUrl }) => {
  return (
    <div className='mt-5'>
        <div className="max-w-md  rounded-lg  overflow-hidden">
            <div className="py-2 font-semibold">
            Report
            </div>
            <div className="py-4">
                <h3 className="text-lg font-semibold">Cisco 2024 AI Readiness Index</h3>
                <p className="text-gray-600 text-sm mt-2">Worldwide, companies know the AI deployment clock is ticking. And the pressure is relentless.</p>
                <a 
                    href={linkUrl} 
                    className="mt-4 inline-block text-blue-500 hover:underline text-sm font-medium"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Get the report
                </a>
            </div>
        </div>
    </div>
  )
}

export default NewsCard
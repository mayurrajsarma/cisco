import React from 'react'
import icon1 from '../assets/icon_certifications.svg';
import icon2 from '../assets/icon_community.svg';
import icon3 from '../assets/icon_design-guides.svg';
import icon4 from '../assets/icon_downloads.svg';
import icon5 from '../assets/icon_support.svg';
import icon6 from '../assets/icon_training.svg';

const QuickTask = () => {
  return (
    <div className='mt-10'>
        <div className='flex justify-center'>
            <div className='inline-flex justify-center space-x-6 p-4'>
                <div className='flex flex-col items-center mx-7'><img src={icon1}/><p>Downloads</p></div>
                <div className='flex flex-col items-center mx-7'><img src={icon2}/><p>Certifications</p></div>
                <div className='flex flex-col items-center mx-7'><img src={icon3}/><p>Cisco Validated</p></div>
                <div className='flex flex-col items-center mx-7'><img src={icon4}/><p>Training</p></div>
                <div className='flex flex-col items-center mx-7'><img src={icon5}/><p>Community</p></div>
                <div className='flex flex-col items-center mx-7'><img src={icon6}/><p>Support</p></div>
            </div>
        </div>
    </div>
  )
}

export default QuickTask
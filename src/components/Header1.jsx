import React from 'react'
import icon1 from "../assets/header1_icon1.svg"
import icon2 from "../assets/header1_icon2.svg"

const Header1 = () => {
  return (
    
        <div className='hidden lg:flex justify-end py-2 bg-gray-100'>
            <ul className='flex justify-evenly text-sm'>
                <li className='mx-3'>How to buy</li>
                <li className='mx-3'>Partners</li>
                <li className='mx-3 flex'><img src={icon1} />Log in</li>
                <li className='mx-3 flex'><img src={icon2} />EN IN</li>
            </ul>
        </div>
    
  )
}

export default Header1
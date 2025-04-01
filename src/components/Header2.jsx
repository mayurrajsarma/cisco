import React, { useState } from 'react'
import Header1 from './Header1'
import search_icon from "../assets/search.svg" ;
import logo from "../assets/cisco_logo.png"
import icon1 from "../assets/header1_icon1.svg"
import icon2 from "../assets/header1_icon2.svg"

const Header2 = () => {
    const [isMenuOpen,setMenuOpen] = useState(false) ;
  return (

    <div className=''>
        <div className='flex justify-between  py-6 px-6 md:px-10 lg:px-10'>
            <div className='flex items-center  md:w-auto'>
              <div>
                <img className="w-25 h-14" src={logo}/>
              </div>
              <ul className='hidden lg:flex items-center px-4'>
                  <li className='mx-3'>Products and services</li>
                  <li className='mx-3'>Solutions</li>
                  <li className='mx-3'>Support</li>
                  <li className='mx-3'>Learn</li>
              </ul>

          </div>
            <button className='lg:hidden ' onClick={()=> setMenuOpen(!isMenuOpen)}>☰</button>
            <ul className='hidden lg:flex px-20 items-center'>
                <li className='mx-3'>Explore Cisco</li>
                <li className='mx-3 flex'>Search<img  className="w-6 h-6 ml-2" src={search_icon}/></li>
            </ul>

        </div>
        
        {isMenuOpen && (
          <ul className="lg:hidden flex flex-col items-center bg-gray-100 py-4 space-y-3">
            <li className="cursor-pointer hover:text-blue-500">Products and Services</li>
            <li className="cursor-pointer hover:text-blue-500">Solutions</li>
            <li className="cursor-pointer hover:text-blue-500">Support</li>
            <li className="cursor-pointer hover:text-blue-500">Learn</li>
            <li className="cursor-pointer hover:text-blue-500">Explore Cisco</li>
            <li className='mx-3'>How to buy</li>
            <li className='mx-3'>Partners</li>
                            {/* <li className='mx-3 flex'><img src={icon1} />Log in</li> */}
            <li className='mx-3 flex'><img src={icon2} />EN IN</li>
            {/* <li className="cursor-pointer flex items-center hover:text-blue-500">
              Search
              <img className="w-6 h-6 ml-2" src={search_icon} alt="Search Icon" />
            </li> */}
          </ul>
        )}
    </div>
    
  )
}

export default Header2
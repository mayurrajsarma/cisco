import React from 'react'
import Header1 from './Header1'
import search_icon from "../assets/search.svg" ;
import logo from "../assets/cisco_logo.png"
const Header = () => {
  return (
    <div>
        <Header1/>
        <div className='justify-between flex py-6'>
            <div className='flex px-20'>
              <div>
                <img className="w-25 h-14" src={logo}/>
              </div>
              <ul className='flex items-center px-4'>
                  <li className='mx-3'>Products and services</li>
                  <li className='mx-3'>Solutions</li>
                  <li className='mx-3'>Support</li>
                  <li className='mx-3'>Learn</li>
              </ul>
            </div>
            <ul className='flex px-20 items-center'>
                <li className='mx-3'>Explore Cisco</li>
                <li className='mx-3 flex'>Search<img  className="w-6 h-6" src={search_icon}/></li>
            </ul>
        </div>
    </div>
  )
}

export default Header
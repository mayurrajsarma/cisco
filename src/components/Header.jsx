import React from 'react'
import Header1 from './Header1'

const Header = () => {
  return (
    <div>
        <Header1/>
        <div className='justify-between flex'>
            <ul className='flex'>
                <li className='mx-3'>Products and services</li>
                <li className='mx-3'>Solutions</li>
                <li className='mx-3'>Support</li>
                <li className='mx-3'>Learn</li>
            </ul>
            <ul className='flex'>
                <li className='mx-3'>Explore cisco</li>
                <li className='mx-3'>Search</li>
            </ul>
        </div>
    </div>
  )
}

export default Header
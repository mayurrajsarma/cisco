import React from 'react'
import Banner from './Banner'
import QuickTask from './QuickTask'
import Container from './Container'
import Footer from './Footer'
import ChatBot from './ChatBot'

const Body = () => {
  return (
    <div className='bg-gray-100 '>
        <Banner/>
        <QuickTask/>
        <Container/>
        <Footer/>
        <ChatBot/>
    </div>
  )
}

export default Body
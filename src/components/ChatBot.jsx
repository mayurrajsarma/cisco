import React from 'react'
import chatIcon from "../assets/chat_icon.svg" ;

const ChatBot = () => (
    <button className="fixed bottom-6 right-6 w-15 h-15 cursor-pointer">
      <img className=' w-full h-full  transition-transform duration-300 hover:scale-110' src={chatIcon} alt='Chat Icon' />
    </button>
  );
  
  export default ChatBot;
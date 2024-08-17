import React from 'react'
import './myStyles.css';

function ChatArea() {
  return (
    <div className='chatArea-container'>
        <div className="chatArea-header">Chat Heading</div>
        <div className="messages-container">messages</div>
        <div className="text-input-area">text input</div>
    </div>
  )
}

export default ChatArea
import React from 'react'
import './myStyles.css';
import { IconButton } from '@mui/material';
import  DeleteIcon  from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';

function ChatArea({ props }) {
  return (
    <div className='chatArea-container'>
        <div className="chatArea-header">
      <p className='con-icon'>{props.name[0]}</p>
        <div className="header-Text">
        <p className='con-title'>{props.name}</p>
        <p className='con-timestamp'>{props.timeStamp}</p>
        </div>
        <IconButton>
            <DeleteIcon/>
        </IconButton>
        </div>





        <div className="messages-container">
        <MessageOthers/>
        <MessageSelf/>
        </div>
        
        <div className="text-input-area">
            <input placeholder='Type a Message' className='search-box' />
            <IconButton>
                <SendIcon/>
            </IconButton>
        </div>
    </div>
  )
}

export default ChatArea
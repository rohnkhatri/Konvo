import React, { useState } from 'react'
import './myStyles.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import ConversationsItem from './ConversationsItem';

function Sidebar() {
  const [conversations ,setConversations] =useState([
    {
      name : 'Test#1',
      lastMessage : 'Last Message #1',
      timeStamp : 'today',
    },
    {
      name : 'Test#2',
      lastMessage : 'Last Message #2',
      timeStamp : 'day before yesterday',
    },
    {
      name : 'Test#3',
      lastMessage : 'Last Message #2',
      timeStamp : 'yesterday',
    },
  ])
    
  return (
    <div className='sidebar-container'>
      <div className='sb-header'>
        <div>
       <IconButton> <AccountCircleIcon/> </IconButton>
       </div>

       <div>
       <IconButton> <PersonAddIcon/> </IconButton>
       <IconButton> <GroupAddIcon/> </IconButton>
       <IconButton> <AddCircleIcon/> </IconButton>
       <IconButton> <NightlightIcon/> </IconButton>
       </div>
      </div>
      <div className='sb-search'>
        <IconButton><SearchIcon/></IconButton>
        <input className='search-box' type="text" placeholder='Search' />
      </div>
      <div className='sb-conversations'>
        {conversations.map((conversation) =>{
          return<ConversationsItem props={conversation} key = {conversation.name}/>
        })}
      </div>
    </div>
  )
}

export default Sidebar
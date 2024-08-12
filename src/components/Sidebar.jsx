import React from 'react'
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
      <div className='sb-conversations'>Konvo
        <ConversationsItem/>
      </div>
    </div>
  )
}

export default Sidebar
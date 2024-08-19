import React, { useState } from "react";
import './myStyles.css';
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";

function MainComponent(){
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
        <div className="main-container">
          <Sidebar/>
          <ChatArea props = {conversations[0]}/>
        </div>
    );
}
export default MainComponent;
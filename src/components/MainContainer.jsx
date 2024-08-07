import React from "react";
import './myStyles.css';
import Sidebar from "./Sidebar";
import WorkArea from "./WorkArea";
function MainComponent(){
    return (
        <div className="main-container">
          <Sidebar/>
          <WorkArea/>
        </div>
    );
}
export default MainComponent;
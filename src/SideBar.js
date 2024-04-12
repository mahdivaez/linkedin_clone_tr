import React from 'react';
import './SideBar.css';
import { Avatar } from '@mui/material';

const SideBar = () => {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
        <span className='sidebar__hash'>#</span>
        <p>{topic}</p>
    </div>
  );
   
  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbG9yJTIwZWZmZWN0fGVufDB8fDB8fHww" alt="" />
        <Avatar className='sidebar__avatar' />
        <h2>Mehdi Vaez Tehrani</h2>
        <h4>mahdivaeztehrani81@hmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,448</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("react js")}
        {recentItem("programming")}
        {recentItem("design")}
        {recentItem("development")}
        {recentItem("social")}
        {recentItem("software")}
        {recentItem("javascript")}

      </div>
    </div>
  );
}

export default SideBar;

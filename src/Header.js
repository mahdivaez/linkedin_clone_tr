import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from './assets/linkedin_icon.png'
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { logout } from './features/userSlice';
import { selectUser } from './features/userSlice';
import { useSelector } from'react-redux';
const Header = () => {

  const user = useSelector(selectUser)
  
   
  const userName = user ? user.displayName : '';

  const dispatch = useDispatch()
  const logOutOfApp = () =>{
      dispatch(logout())
      auth.signOut();
  }
  return (
    <div className='header'>
      <div className='header__left'>

        <img src={LinkedInIcon} alt=""/>

        <div className="header__search">
          <SearchIcon />
          <input type="text" />

        </div>
        
      </div>
      <div className='header__right'>

        <HeaderOption Icon ={HomeIcon} title="Home" />
        <HeaderOption Icon ={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon ={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon ={ChatIcon} title="Messaging" />
        <HeaderOption Icon ={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar={true} title={userName} onClick={logOutOfApp}/>




      </div>
    </div>
  )
}

export default Header


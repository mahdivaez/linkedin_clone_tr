import React from 'react';
import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import Feed from './Feed';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './Login';
function App() {
  const user = useSelector(selectUser)
  return (
    <div className="app">
      <header className="App-header">
       <Header/>
       {!user ? <Login/>: (  <div className="app_body">
        <SideBar/>
        <Feed/>
       </div>) }
     
      </header>
    </div>
  );
}

export default App;

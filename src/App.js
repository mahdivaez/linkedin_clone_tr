import React from 'react';
import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import Feed from './Feed';

function App() {
  return (
    <div className="app">
      <header className="App-header">
       <Header/>
       <div className="app_body">
        <SideBar/>
        <Feed/>
       </div>
      </header>
    </div>
  );
}

export default App;

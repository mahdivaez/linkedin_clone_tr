import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import Feed from "./Feed";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase";
import { logout  , login } from "./features/userSlice";
import Widgets from "./Widgets";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        dispatch(login({
          email : userAuth.email,
          uid: userAuth.uid,
          displayName:userAuth.displayName,
          photoURL:userAuth.photoURL
        }))
      }else{
        dispatch(logout())
      }
    });
  },  [])
  return (
    <div className="app">
      <header className="App-header">
        <Header />
        {!user ? (
          <Login />
        ) : (
          <div className="app_body">
            <SideBar />
            <Feed />
            <Widgets />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './Login.css';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import {login} from './features/userSlice';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState(''); // State for profile picture URL
  const dispatch  = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then(userAuth => {
        dispatch(login({
            email : userAuth.user.email,
            uid: userAuth.user.uid,
            displayName:userAuth.user.displayName,
            photoURL:userAuth.user.photoURL

        }))
    }).catch(error =>{
        alert(error)
    })
    // Add logic for logging in
  };

  const register = (e) => {

    // Add logic for registration
    if (!name){
        return alert("Please enter your name");
    }
        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) =>{
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic
            })
            .then(()=>{
                dispatch(login({
                    email : userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName:name,
                    photoURL:profilePic
                }))
                
            }).catch((error) => alert(error))
        })
            
        
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (login or register)
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png"
          alt=""
        />
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Profile Picture URL"
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
          />
          <button onClick={loginToApp} type="submit">Sign In</button>
        </form>
        <p>
          Not a member? <span className="login__register" onClick={register}>Register Now</span>
        </p>
      </div>
    </div>
  );
};

export default Login;

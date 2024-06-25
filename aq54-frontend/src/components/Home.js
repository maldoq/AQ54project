import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import {  signOut } from "firebase/auth";
import { useHistory } from 'react-router-dom';

const HomePage = () => {
  const history = useHistory();

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // ...
          console.log("uid", uid)
        } else {
          // User is signed out
          // ...
          console.log("user is logged out")
        }
      });
     
}, [])

const handleLogout = () => {               
  signOut(auth).then(() => {
  // Sign-out successful.
      history.push('/');
      console.log("Signed out successfully")
  }).catch((error) => {
  // An error happened.
  });
}

  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the home page!</p>
      <button onClick={handleLogout}>
                        Logout
                    </button>
    </div>
  );
};

export default HomePage;

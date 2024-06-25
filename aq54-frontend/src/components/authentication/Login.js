import React, { useState } from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../../firebase';
import { NavLink, useHistory  } from 'react-router-dom'
import '../../static/auth/Auth.css'

const LoginPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        history.push('/home');
        console.log(user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    });
   
}

  return (
    <div className='body'>
    <div className='contain'>
      <h2>Login</h2>
      <form>
      <input
        id="email-address"
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        id="password"
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={onLogin}>Login</button>
      <p>
        No account yet? {' '}
                            <NavLink to="/signup">
                                Sign up
                            </NavLink>
      </p>
      </form>
    </div>
    </div>
  );
};

export default LoginPage;

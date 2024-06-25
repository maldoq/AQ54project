import React, { useState } from 'react';
import { NavLink, useHistory  } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../../firebase';
import '../../static/auth/Auth.css'

const SignupPage = () => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault()
   
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          history.push('/');
          // ...
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ..
      });

 
  }

  return (
    <div className='body'>
    <div className='contain'>
      <h2>Sign Up</h2>
      <form>
      <input
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        required
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button type="submit" onClick={onSubmit}>Sign Up</button>
      <p>
        Already have an account?{' '}
                        <NavLink to="/" >
                            Sign in
                        </NavLink>
      </p>
      </form>
    </div>
    </div>
  );
};

export default SignupPage;

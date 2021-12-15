import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signupUser } from '../api/UserAPI';

const SignupPage = (props) => {
  let navigate = useNavigate();

  const handleSignup = async (evt) => {
    evt.preventDefault();
    let userObject = {
      'username': evt.target.username.value,
      'password': evt.target.password.value,
    }
    let response = await signupUser(userObject);
    let data = await response.json();
    if (data.error) {
      console.log('there was an error signing up');
    } else {
      navigate('/login');
    }

  }

  return (
    <div>
      <h1>Signup Page</h1>
      <form onSubmit={handleSignup}>
        <label>UserName:</label>
        <input type='text' placeholder='RonBurgondy' name='username' />
        <label>Password:</label>
        <input type='password' name='password' />
        <button type='submit' >Sign Up</button>
      </form>
      <div>
        <Link to='/'>Home</Link>
      </div>
      <div>
        <Link to='/login'>Login</Link>
      </div>
    </div>
  );
};

export default SignupPage;
import React, { useState, useEffect } from 'react';
import { BASE_URL, BASE_BACKEND } from '../globals'
import { Button } from 'reactstrap'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      window.location.replace(`${BASE_URL}userhome`);
    } else {
      setLoading(false);
    }
  }, [])

  const onFormSubmit = async (event) => {
    event.preventDefault()
    const user = {
      username: username,
      password: password
    }
    const response = await fetch(`${BASE_BACKEND}auth/login/`,{
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      if (data.key) {
        localStorage.clear();
        localStorage.setItem('token', data.key);
        window.location.replace(`${BASE_URL}userhome`);
      } else {
        setUsername('');
        setPassword('');
        localStorage.clear();
        setErrors(true);
      }
    })

  };
  return (
    <div>
      {loading === false && <h1>Login</h1>}
      {errors === true && <h2>Cannot log in with provided credentials</h2>}
      {loading === false && (
        <form onSubmit={onFormSubmit}>
          <label htmlFor='username'>Username:</label> <br />
          <input
            name='username'
            type='username'
            value={username}
            required
            onChange={event => setUsername(event.target.value)}
          />{' '}
          <br />
          <label htmlFor='password'>Password:</label> <br />
          <input
            name='password'
            type='password'
            value={password}
            required
            onChange={event => setPassword(event.target.value)}
          />{' '}
          <br />
          <Button className="px-5 m-3" type="submit" color="primary">   
            Login
          </Button>
        </form>
      )}
    </div>
  );
};

export default Login;

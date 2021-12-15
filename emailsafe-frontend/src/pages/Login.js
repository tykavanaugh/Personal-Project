import React, { useState, useEffect } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      window.location.replace('http://localhost:3000/userhome');
    } else {
      setLoading(false);
    }
  }, [])

  const onSubmit = async (event) => {
    event.preventDefault()
    const user = {
      username: username,
      password: password
    }
    const response = await fetch('http://localhost:8000/api/auth/login/',{
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
        window.location.replace('http://localhost:3000/userhome');
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
        <form onSubmit={onSubmit}>
          <label htmlFor='username'>username address:</label> <br />
          <input
            name='username'
            type='username'
            value={username}
            required
            onChange={e => setUsername(e.target.value)}
          />{' '}
          <br />
          <label htmlFor='password'>Password:</label> <br />
          <input
            name='password'
            type='password'
            value={password}
            required
            onChange={e => setPassword(e.target.value)}
          />{' '}
          <br />
          <input type='submit' value='Login' />
        </form>
      )}
    </div>
  );
};

export default Login;

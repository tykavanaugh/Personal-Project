import React, { useState, useEffect } from 'react';
import { BASE_URL, BASE_BACKEND } from '../globals'
import { Button } from 'reactstrap'

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      window.location.replace(`${BASE_URL}/userhome`);
    } else {
      setLoading(false);
    }
  }, []);

  const onFormSubmit = event => {
    event.preventDefault()

    const user = {
      username: username,
      email:email,
      password1: password1,
      password2: password2
    };

    fetch(`${BASE_BACKEND}auth/register/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.key) {
          localStorage.clear();
          localStorage.setItem('token', data.key);
          window.location.replace(`${BASE_URL}userhome`);
        } else {
          setUsername('');
          setEmail('');
          setPassword1('');
          setPassword2('');
          localStorage.clear();
          setErrors(true);
        }
      }).catch(
        error => {console.log(error)}
      );

  };

  return (
    <div>
      {loading === false && <h1>Signup</h1>}
      {errors === true && <h2>Cannot signup with provided credentials</h2>}
      <form onSubmit={onFormSubmit}>
        <label htmlFor='username'>Username:</label> <br />
        <input
          name='username'
          type='username'
          value={username}
          onChange={event => setUsername(event.target.value)}
          required
        />{' '}
        <br />
        <label htmlFor='email'>Email:</label> <br />
        <input
          name='email'
          type='email'
          value={email}
          onChange={event => setEmail(event.target.value)}
          required
        />{' '}
        <br />
        <label htmlFor='password1'>Password:</label> <br />
        <input
          name='password1'
          type='password'
          value={password1}
          onChange={event => setPassword1(event.target.value)}
          required
        />{' '}
        <br />
        <label htmlFor='password2'>Confirm password:</label> <br />
        <input
          name='password2'
          type='password'
          value={password2}
          onChange={event => setPassword2(event.target.value)}
          required
        />{' '}
        <br />
        <Button className="px-5 m-3" type="submit" color="warning" style={{cursor:"pointer"}}>   
            Login
        </Button>
      </form>
    </div>
  );
};

export default Signup;
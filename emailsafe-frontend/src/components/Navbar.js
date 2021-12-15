import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [isAuth,setIsAuth] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('token') !== null){
      setIsAuth(true)
    }
  },[])

  return (
    <>
    <nav>
      <h1>Emailsafe Placeholder Navbar</h1>
      <ul>
        {isAuth ? (
          <>
            {' '}
            <li>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
            <li>
              <Link to='/logout'>Logout</Link>
            </li>
          </>
        ) : (
          <>
            {' '}
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/signup'>Signup</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
    </>
  )
}

export default Navbar

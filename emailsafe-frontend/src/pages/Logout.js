import React, { useState, useEffect, Fragment } from 'react';
import { BASE_URL, BASE_BACKEND } from '../globals'
import { Button } from 'reactstrap'

const Logout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') == null) {
      window.location.replace(`${BASE_URL}login`);
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogout = e => {
    e.preventDefault();

    fetch(`${BASE_BACKEND}auth/logout/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        localStorage.clear();
        window.location.replace(`${BASE_URL}`);
      });
  };

  return (
    <div>
      {loading === false && (
        <Fragment className='m-5'>
          <h1>Are you sure you want to logout?</h1>
          <Button className="px-5 m-3" type="submit" color="warning" style={{cursor:"pointer"}} onClick={handleLogout}>   
            Logout
          </Button>
        </Fragment>
      )}
    </div>
  );
};

export default Logout;
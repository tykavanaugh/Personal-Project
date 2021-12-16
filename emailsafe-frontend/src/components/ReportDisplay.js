import React from 'react'
import { Accordion } from 'reactstrap'
import { useState,useEffect } from 'react'
import { BASE_URL, BASE_BACKEND } from '../globals'
import { fetchCurrentUser, fetchUserReports } from '../api/DjangoAPI'
import Report from './Report'

const ReportDisplay = (props) => {
  const [openItem, setOpenItem] = useState('0')
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(true);
  const [userReports, setUserReports] = useState({});
  const [gotReports, setGotReports] = useState(false);

  useEffect(() => {
    const getEmail = async () => {
      const data = await fetchUserReports()
      setUserReports(data)
      console.log(data)
      data.map(item => {console.log(item)})
      setGotReports(true)
    }
    if (localStorage.getItem('token') === null) {
      window.location.replace(`${BASE_URL}login`);
    } else {
      fetch(`${BASE_BACKEND}auth/user/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(data => {
          setUsername(data.username);
          setLoading(false);
        });
    }
    getEmail()
  }, []);

  const handleAccordionClick = (event) => {
    setOpenItem(String(event.currentTarget.parentElement.id))
  }

  
  
  return (
    <>
      <h1>{username}'s Reports</h1>
      <Accordion
        open={openItem}
        toggle={function noRefCheck(){}}
        className='mx-3'
      >
        {userReports && Array.from(userReports).map((item,index) => {<Report reportID={index} reportObject={item} handleClick={handleAccordionClick}/>})}
      </Accordion>
    </>
  )
}

export default ReportDisplay

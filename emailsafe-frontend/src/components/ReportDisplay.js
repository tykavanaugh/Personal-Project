import React from 'react'
import { Accordion,Button } from 'reactstrap'
import { useState,useEffect } from 'react'
import { BASE_URL, BASE_BACKEND } from '../globals'
import { fetchCurrentUser, fetchUserReports } from '../api/DjangoAPI'
import Report from './Report'
import {TARGET_EMAIL} from '../globals'
import Clipboard from "react-clipboard.js"

const ReportDisplay = (props) => {
  const [openItem, setOpenItem] = useState('0')
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(true);
  const [userReports, setUserReports] = useState([]);
  const [gotReports, setGotReports] = useState(false);

  useEffect(() => {
    const getEmail = async () => {
      const data = await fetchUserReports()
      if (data){
        setUserReports(data)
        setGotReports(true)}
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
  }, [openItem]);

  const handleAccordionClick = (event) => {
    setOpenItem(String(event.currentTarget.parentElement.id))
  }


  return (
    <>
      <div className="bg-light bg-gradient">
        <h1>{username}'s Reports</h1>
        <h6>
        <p>Forward your suspcious emails to:</p> 
        <code>{TARGET_EMAIL}</code><Clipboard component="span" data-clipboard-text={TARGET_EMAIL}> <Button color="dark" outline>Copy</Button></Clipboard>
        </h6>
      </div>
      <Accordion
        open={openItem}
        toggle={function noRefCheck(){}}
        className='mx-3'
      >
        {Array.from(userReports).slice(0).reverse().map((report,index) => <Report key= {index} reportID={`${index}`} reportObject={report} handleClick={handleAccordionClick}/>)}
      </Accordion>
    </>
  )
}

export default ReportDisplay

import React from 'react'
import { Accordion,Button, CardSubtitle, CardTitle, CardBody,Card, CardText } from 'reactstrap'
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
      <Card className="bg-dark bg-gradient m-5">
        <CardBody className="text-warning">
          <CardTitle>
            <h1>{username}'s Reports</h1>
          </CardTitle>
          <CardSubtitle>
            <p>Forward your suspicious emails to:</p> 
          </CardSubtitle>
          <CardText>
            <code className="text-light fs-5">{TARGET_EMAIL}</code><Clipboard component="span" data-clipboard-text={TARGET_EMAIL}> <div><Button color="light" className="m-2" outline>Copy</Button></div></Clipboard>
          </CardText>
        </CardBody>
      </Card>
      <Accordion 
        open={openItem}
        toggle={function noRefCheck(){}}
        className='mx-3 mb-5'
      >
        {Array.from(userReports).slice(0).reverse().map((report,index) => <Report key= {index} reportID={`${index}`} reportObject={report} handleClick={handleAccordionClick}/>)}
      </Accordion>
      <div>&emsp;</div>
    </>
  )
}

export default ReportDisplay

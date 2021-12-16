import React from 'react'
import { Accordion, AccordionItem, AccordionHeader, AccordionBody } from 'reactstrap'
import { useState,useEffect } from 'react'
import { BASE_URL, BASE_BACKEND } from '../globals'
import { fetchCurrentUser } from '../api/DjangoAPI'

const ReportDisplay = (props) => {
  const [openItem, setOpenItem] = useState('0')
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEmail = async () => {
      const data = await fetchCurrentUser()
      console.log(data)
      console.log(data.email)
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
        <AccordionItem id='1'>
          <AccordionHeader targetId="1" onClick={(event) => handleAccordionClick(event)}>
            Accordion Item 1
          </AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>
              This is the first item's accordion body.
            </strong>
            <code>
              .accordion-body
            </code>
            , though the transition does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem id='2'>
          <AccordionHeader targetId="2" onClick={(event) => handleAccordionClick(event)}>
            Accordion Item 2
          </AccordionHeader>
          <AccordionBody accordionId="2">
            <strong>
              This is the first item's accordion body.
            </strong>
            <code>
              .accordion-body
            </code>
            , though the transition does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem id='3'>
          <AccordionHeader targetId="3" onClick={(event) => handleAccordionClick(event)}>
            Accordion Item 3
          </AccordionHeader>
          <AccordionBody accordionId="3">
            <strong>
              This is the first item's accordion body.
            </strong>
            <code>
              .accordion-body
            </code>
            , though the transition does limit overflow.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </>
  )
}

export default ReportDisplay

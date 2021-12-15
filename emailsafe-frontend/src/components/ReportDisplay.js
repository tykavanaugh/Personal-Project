import React from 'react'
import { Accordion, AccordionItem, AccordionHeader, AccordionBody } from 'reactstrap'
import { useState } from 'react'

const ReportDisplay = (props) => {
  const [openItem, setOpenItem] = useState('1')

  const handleAccordionClick = (event) => {
    console.log(event.currentTarget.parentElement.id)
    setOpenItem(String(event.currentTarget.parentElement.id))
  }

  return (
    <>
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

import { Accordion, AccordionItem, AccordionHeader, AccordionBody } from 'reactstrap'
const Report = ({reportID,reportObject,handleClick}) => {
  console.log(reportID)
  console.log(reportObject)
  return (
    <>
      <AccordionItem id={reportID}>
          <AccordionHeader targetId="1" onClick={(event) => handleClick(event)}>
            Accordion Item 1
          </AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>
              Report {reportID}
            </strong>
            <code>
              {reportObject}
            </code>
            Okay!
          </AccordionBody>
        </AccordionItem>
    </>
  )
}

export default Report

import { Accordion, AccordionItem, AccordionHeader, AccordionBody } from 'reactstrap'
const Report = ({reportID,reportObject,handleClick}) => {
  console.log(reportObject)
  return (
    <>
      <AccordionItem id={(reportID)}>
          <AccordionHeader targetId={(reportID)} onClick={(event) => handleClick(event)}>
            <h4>
                Report {(reportID)}
            </h4>
          </AccordionHeader>
          <AccordionBody accordionId={(reportID)}>
            <dl className="text-start">
              <dt>
                
              </dt>
              <dt>Email summary</dt>
              <dd> <strong>Sender:</strong> <p>{reportObject.headers.from}</p> </dd>
              <dd> <strong>Subject:</strong> <p>{reportObject.headers.subject}</p></dd>
              <dd> <strong>Plaintext body: </strong> <p>{reportObject.plain}</p></dd>
              <dd>{ reportObject ? <p>Attachment found</p> : <p>No attachment found</p> }</dd>
              <dt><h3>Report Contents</h3></dt>
              <dd></dd>
            </dl>
            
            
          </AccordionBody>
        </AccordionItem>
    </>
  )
}

export default Report

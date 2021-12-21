import { Accordion, AccordionItem, AccordionHeader, AccordionBody } from 'reactstrap'
import ReportDetail from "./ReportDetail"
import SummaryDetail from "./SummaryDetail"

const Report = ({reportID,reportObject,handleClick}) => {
  return (
    <>
      <AccordionItem id={(reportID)}>
          <AccordionHeader targetId={(reportID)} onClick={(event) => handleClick(event)}>
            <h4>
                <b>Report- {reportObject.pk}</b> {reportObject.report ? <>{reportObject.report.sender_domain} </>: <> Unknown domain </>}
            </h4>
          </AccordionHeader>
          <AccordionBody accordionId={(reportID)}>
            <dl className="text-start">
              <ReportDetail reportObject={reportObject}/>
              <hr/>
              <SummaryDetail reportObject={reportObject}/>
            </dl>
            
            
          </AccordionBody>
        </AccordionItem>
    </>
  )
}

export default Report

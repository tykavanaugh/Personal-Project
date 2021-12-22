import React from 'react'
import { Collapse,CardBody,Card,Button } from 'reactstrap'

const SummaryDetail = ({reportObject}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <div>
      <div className="d-grid gap-2">
          <Button
            color="warning"
            onClick={() => {setIsOpen(!isOpen)}}
            style={{
              marginBottom: '1rem'
            }}
          >
            Open/Close Email Summary
          </Button>
        </div>
        <Collapse isOpen={isOpen}>
          <Card>
            <CardBody>
              <dl className="text-start">
                <dt>
                  
                </dt>
                <dt>Email summary</dt>
                <dd> <strong>Source:</strong> { reportObject.report ? <p>{reportObject.report.sender_email}</p> : <p>No sender info included in forward</p> }</dd>
                <dd> <strong>Subject:</strong> <p>{reportObject.headers.subject}</p></dd>
                <dd> <strong>Forwarded Email: </strong> <p>{reportObject.plain}</p></dd>
                <dd> <strong>Attachments</strong>
                  { reportObject.attachments.length > 0 ? reportObject.attachments.map((item,index) => {return(<p key={index}>{item.file_name}</p>)}) : <p>No attachment found</p> }</dd>
                <dd></dd>
                <dd><small className="text-secondary">This summary is populated via parsing the forward sent by you. If you did not forward header information or did not correctly forward the email (should be done by default in most email services) than this may not populate fully. This app has been most tested with gmail.</small></dd>
              </dl>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    </>
  )
}

export default SummaryDetail

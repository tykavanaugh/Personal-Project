import React from 'react'
import { Collapse,CardBody,Card,Button } from 'reactstrap'

const ReportDetail = ({reportObject}) => {
  const [isOpen, setIsOpen] = React.useState(true);

  const renderPhishReport = (boolReport) => {
    return (boolReport
      ? <div className="text-warning">Known Source of Phishing Emails</div>
      : <div className="text-body">No Reports of Phishing from this Domain</div> 
      )
  }

  const scoreArray = {
      "harmless":0,
      "malicious":0,
      "suspicious":0,
      "undetected":0,
      "other":0,
  }

  
  const renderDomainReport = (arrayReport) => {
    if (Object.keys(arrayReport).length < 1){
      return (<div>No Attachment Found</div>)
    }
    const score = scoreArray
    score['harmless'] += arrayReport.harmless
    score['malicious'] += arrayReport.malicious
    score['suspicious'] += arrayReport.suspicious
    score['undetected'] += arrayReport.undetected
    score['other'] += arrayReport.timeout
    return(
      <>
      <div>Votes from Security Vendors:</div>
      {arrayReport.harmless > 0 ? <div><span className="text-success">Harmless:&nbsp;</span><span className="fw-bold">{arrayReport.harmless}</span></div> : <></>}
      {arrayReport.undetected > 0 ? <div><span className="text-primary">Undetected:&nbsp;</span><span className="fw-bold">{arrayReport.undetected}</span></div> : <></>}
      {arrayReport.suspicious > 0 ? <div><span className="text-warning">Suspicious:&nbsp;</span><span className="fw-bold">{arrayReport.suspicious}</span></div> : <></>}
      {arrayReport.malicious > 0 ? <div><span className="text-danger">Malicious:&nbsp;</span><span className="fw-bold">{arrayReport.malicious}</span></div> : <></>}
      {arrayReport.timeout > 0 ? <div><span className="text-info">Timeout/Error:&nbsp;</span><span className="fw-bold">{arrayReport.timeout}</span></div> : <></>}
      </>
    )
  }

  const renderAttachmentReport = (arrayReport) => {

    const score = scoreArray
    score['harmless'] += arrayReport.harmless
    score['malicious'] += arrayReport.malicious
    score['suspicious'] += arrayReport.suspicious
    score['undetected'] += arrayReport.undetected
    score['other'] += arrayReport["confirmed-timeout"]
    score['other'] += arrayReport.timeout
    score['other'] += arrayReport["type-unsupported"]
    if (score.harmless+score.undetected+score.suspicious+score.malicious< 1){
      return (<div>No Attachment Found</div>)
    }
    return(
      <>
      <div>Votes from Security Vendors:</div>
      {arrayReport.harmless > 0 ? <div><span className="text-success">Harmless:&nbsp;</span><span className="fw-bold">{arrayReport.harmless}</span></div> : <></>}
      {arrayReport.undetected > 0 ? <div><span className="text-primary">Undetected:&nbsp;</span><span className="fw-bold">{arrayReport.undetected}</span></div> : <></>}
      {arrayReport.suspicious > 0 ? <div><span className="text-warning">Suspicious:&nbsp;</span><span className="fw-bold">{arrayReport.suspicious}</span></div> : <></>}
      {arrayReport.malicious > 0 ? <div><span className="text-danger">Malicious:&nbsp;</span><span className="fw-bold">{arrayReport.malicious}</span></div> : <></>}
      {arrayReport.timeout > 0 ? <div><span className="text-info">Timeout/Error:&nbsp;</span><span className="fw-bold">{arrayReport.timeout}</span></div> : <></>}
      </>
    )
  }

  return (
    <>
      <div>
      <div className="d-grid gap-2">
          <Button
            color="dark"
            onClick={() => {setIsOpen(!isOpen)}}
            style={{
              marginBottom: '1rem'
            }}
          >
            Open/Close Report
          </Button>
        </div>
        <Collapse isOpen={isOpen}>
          <Card>
            <CardBody>
              <dl className="text-start">
                <dt>
                  
                </dt>
                <dt><h2>Report:</h2></dt>
                <dd> <strong>Phishing Check:</strong> { renderPhishReport(reportObject.report.is_phish_url) }</dd>
                <hr />
                <dd> <strong>Attachment Malware Check:</strong> { renderAttachmentReport(reportObject.report.attachment_report) }</dd>
                <hr />
                <dd> <strong>Domain Maliciousness Check:</strong> { renderDomainReport(reportObject.report.domain_report) }</dd>
                <hr />
              </dl>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    </>
  )
}

export default ReportDetail

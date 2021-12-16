import React from 'react'
import Report from './Report'

const ReportList = (props) => {
  const renderReports = () => {
    if (!props.reports){
      return "none"
    }
    console.log(props.reports[0])    
    const output = (props.reports).map((report,index) => 
      {
        (
          <Report reportID={index} reportObject={report} handleClick={props.handleClick}/>
        )
      }
    )
    console.log(output)
    return output
  }
  return (
    <>
      {renderReports()}
    </>
  )
}

export default ReportList

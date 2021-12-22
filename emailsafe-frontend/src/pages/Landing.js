import React from 'react'
import { Card, CardBody, CardFooter, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import Spinner from '../components/Spinner'
import { BsGithub } from 'react-icons/bs'

const Landing = () => {
  return (
    <div>
      <Card className="m-5 p-5 bg-dark bg-gradient text-warning">
        <CardBody>
          <CardTitle>
            <h2>Welcome to EmailSafe</h2>
            <hr />
            <h6>Please register an account to begin checking emails</h6>
          </CardTitle>
          <Spinner />
          <CardText>
            <p>Emailsafe allows anyone to easily and safely check potentially malicious emails.</p>
            <p>Simply forward emails to the address provided once you establish an account.</p>
          </CardText>
          <CardSubtitle>
            <hr />
            <p className="fw-lighter">EmailSafe primarily uses data from VirusTotal and CheckPhish</p>
          </CardSubtitle>
          <CardFooter>
            <BsGithub/>
          </CardFooter>
        </CardBody>
      </Card>
    </div>
  )
}

export default Landing

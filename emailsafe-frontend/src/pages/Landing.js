import React from 'react'
import { Card, CardBody, CardText, CardTitle } from 'reactstrap'
import Spinner from '../components/Spinner'

const Landing = () => {
  return (
    <div>
      <Card className="m-5 p-5 bg-dark bg-gradient text-warning">
        <CardBody>
          <CardTitle>
            <h2>Welcome to EmailSafe</h2>
            <h6>Please register an account to begin checking emails</h6>
          </CardTitle>
          <Spinner />
          <CardText>
            <p>Emailsafe allows anyone to check potentially malicious emails.</p>
            <p>Simply forward emails to the address provided once you establish an account.</p>
            <p></p>
          </CardText>
        </CardBody>
      </Card>
    </div>
  )
}

export default Landing

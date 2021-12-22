import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'

const Spinner = () => {
  return (
    <div>
      <marquee behavior="scroll" direction="" scrollamount="2" scrolldelay="1" truespeed> <HiOutlineMail size={250} className="App-logo" /></marquee>
    </div>
  )
}

export default Spinner

import React from 'react'
const BASE_URL = "http://localhost:8000/api/"


const emailAPI = async () => {
  try {
    let response = await fetch(BASE_URL + "login")
    let data = await response.json()
    return data
  } catch (error) {
    console.error(error)
    return {}
  }
  

}

export default emailAPI

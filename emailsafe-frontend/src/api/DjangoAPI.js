import { BASE_URL, BASE_BACKEND } from '../globals'

export const tryCatchFetch = async (url, init=null) => {
  try {
    const response = await fetch(url,{
      method:'GET',
      headers:{
        Authorization:`token ${localStorage.getItem('token')}`
      }
    })
    if (response.ok){
      return await response.json()
    } else {
      throw new Error(`Bad response from server: ${response.status} ${response.statusText}`)
    }
  } catch (event) {
    console.error(event)
    return null
  }
}

export const fetchEmail = async () => {
  const url = `${BASE_BACKEND}current_user`
  return await tryCatchFetch(url)
}


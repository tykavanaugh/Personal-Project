const login = async (userObject) => {
  return await fetch('http://localhost:8000/api/auth/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObject)
  }).then(res => res)
};

const getLoggedInUser = async (token) => {
  return await fetch('http://localhost:8000/api/current_user/', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    }
  }).then(res => res)
};

const signupUser = async (userObject) => {
  return await fetch('localhost:8000/api/auth/register/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObject)
  }).then(res => res)
};

export { login, getLoggedInUser, signupUser }

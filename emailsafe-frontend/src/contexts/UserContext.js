import { createContext } from 'react';

const UserContext = createContext({
  user: null, // default user value will be null
  setUser: () => {}, // for now, we'll simply create an empty setUser function
});

export default UserContext;
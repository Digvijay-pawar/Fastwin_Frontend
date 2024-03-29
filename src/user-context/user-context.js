// UserContext.js
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const updateUser = (userData) => {
    console.log(userData)
    setUser(userData);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

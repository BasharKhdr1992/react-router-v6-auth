import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={[isAuthenticated, login, logout]}>
      {props.children}
    </AuthContext.Provider>
  );
};

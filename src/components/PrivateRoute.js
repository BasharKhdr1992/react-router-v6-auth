import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Protected from './protected/Protected';

/*
  using children, react router will only see the initial status of our
  authentication
  render allows us to re-check if a user is authenticated
*/
const PrivateRoute = () => {
  const [isAuthenticated] = useContext(AuthContext);

  const location = useLocation();

  return isAuthenticated ? (
    <Protected />
  ) : (
    <Navigate
      state={{
        from: location.pathname,
      }}
      to={{
        pathname: '/login',
      }}
    />
  );
};

export default PrivateRoute;

import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [isAuthenticated, login] = useContext(AuthContext);

  const location = useLocation();

  if (isAuthenticated) {
    return <Navigate to={location.state?.from || '/'} />;
  }

  return (
    <div>
      <h1>You must be login to view this page</h1>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;

import React from 'react';
import Public from './Public';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from './Login';
import Logout from './Logout';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Public />} />
      <Route path="/login" element={<Login />} />
      <Route path="/protected" element={<PrivateRoute />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
};

export default Routing;

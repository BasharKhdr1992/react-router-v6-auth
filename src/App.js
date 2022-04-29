import React from 'react';
import Routing from './components/Routing';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Outlet } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routing />
        <Outlet />
      </Router>
    </AuthProvider>
  );
};

export default App;

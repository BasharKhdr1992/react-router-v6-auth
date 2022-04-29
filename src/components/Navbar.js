import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const [isAuthenticated, , logout] = useContext(AuthContext);

  return (
    <ul>
      <li>
        <Link to={'/'}>Public</Link>
      </li>
      <li>
        <Link to={'/protected'}>Protected</Link>
      </li>
      {isAuthenticated && (
        <li>
          <Link to={'/logout'} onClick={logout} replace={false}>
            Logout
          </Link>
        </li>
      )}
    </ul>
  );
};

export default Navbar;

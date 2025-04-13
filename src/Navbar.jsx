import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Signup from './Signup/signup';
import { useNavigate } from 'react-router-dom';

function navbar() {
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    navigate(path);
  };
}

const Navbar = () => {
  return (
   <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid justify-content-center">
        <span className="navbar-brand mb-0 h1">Expense Tracker</span>
        <div className="container-fluid justify-content-center">
        
        <button className="btn btn-success m-3" onClick={() => handleRedirect('/login')}>Login</button>
          <button className="btn btn-secondary"  onClick={() => handleRedirect('/signup')}>Sign Up</button>
       
      </div>
      </div>
     
    </nav>
  );
};

export default Navbar;






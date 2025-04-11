

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ExpenseProvider } from './ExpenseContext';
import AddExpense from './addExpense';
import ViewExpense from './viewExpense';
import DeleteExpense from './deleteExpense';
import EditExpense from './editExpense';

import Signup from './Signup/signup';
import Login from './Login/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

const App = () => {
  return (
    <ExpenseProvider>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/"> welcome!! Expense Tracker</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className="nav-link" to="/signup">Sign Up</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/add">Add Expense</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/view">View Expenses</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/edit">Edit Expense</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/delete">Delete Expense</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container py-4">
          <Routes>
          
            <Route path="/add" element={<AddExpense />} />
            <Route path="/view" element={<ViewExpense />} />
            <Route path="/edit" element={<EditExpense />} />
            <Route path="/delete" element={<DeleteExpense />} />
            <Route path="/" element={<><AddExpense /><ViewExpense /><EditExpense /><DeleteExpense /></>} />
          </Routes>
        </div>
      </Router>
      </ExpenseProvider>
   
  );
};

export default App;

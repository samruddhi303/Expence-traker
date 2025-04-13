/*import React from 'react';
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
};*/

import React, { useState } from 'react';
import './App.css';
import AddExpense from './addExpense';
import ViewExpense from './viewExpense';
import Navbar from './Navbar';


function App() {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);

  const addExpense = (expense) => {
    if (editingExpense) {
      // Edit Mode
      setExpenses(prev =>
        prev.map(e => e.id === editingExpense.id ? { ...expense, id: e.id, createdAt: e.createdAt } : e)
      );
      setEditingExpense(null);
    } else {
      // Add New
      setExpenses(prev => [...prev, { ...expense, id: Date.now(), createdAt: new Date() }]);
    }
  };

  const deleteExpense = (id) => {
    setExpenses(prev => prev.filter(e => e.id !== id));
  };

  const startEdit = (expense) => {
    setEditingExpense(expense);
  };

  return (
    <div className="app-container">
  <div className="center-box">
 
  

    <div className="App">
      <Navbar />
     
      <div className="main-container">
        <div className="expense-box">
          <AddExpense addExpense={addExpense} editingExpense={editingExpense} />
        </div>
        <div className="expense-box">
          <ViewExpense
            expenses={expenses}
            onDelete={deleteExpense}
            onEdit={startEdit}
          />
        </div>
      </div>
    </div>
    </div>
</div>
  );
}

export default App;











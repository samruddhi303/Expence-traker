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











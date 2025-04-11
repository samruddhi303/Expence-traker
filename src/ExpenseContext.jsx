import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const token = localStorage.getItem('token');
    const res = await axios.get('/api/expenses', {
      headers: { Authorization: `Bearer ${token}` }
    });
    setExpenses(res.data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async (data) => {
    const token = localStorage.getItem('token');
    const res = await axios.post('/api/expenses', data, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setExpenses(prev => [res.data, ...prev]);
  };

  const editExpense = async (id, updatedData) => {
    const token = localStorage.getItem('token');
    const res = await axios.put(`/api/expenses/${id}`, updatedData, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setExpenses(prev => prev.map(exp => exp._id === id ? res.data : exp));
  };

  const deleteExpense = async (id) => {
    const token = localStorage.getItem('token');
    await axios.delete(`/api/expenses/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setExpenses(prev => prev.filter(exp => exp._id !== id));
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, editExpense, deleteExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};

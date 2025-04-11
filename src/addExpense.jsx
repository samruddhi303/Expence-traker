import React, { useState, useContext } from 'react';
import { ExpenseContext } from './ExpenseContext';
import "./addExpense.css"

const AddExpense = () => {
  const { addExpense } = useContext(ExpenseContext);
  const [formData, setFormData] = useState({ category: '', amount: '', comments: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addExpense(formData);
    setFormData({ category: '', amount: '', comments: '' });
  };

  return (
    <form onSubmit={handleSubmit} className=" add-expence p-4">
      <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" required className=" add-cat border p-2" /><br/>
      <input name="amount" type="number" value={formData.amount} onChange={handleChange} placeholder="Amount" required className=" add-cat border p-2 mt-2" /><br/>
      <input name="comments" value={formData.comments} onChange={handleChange} placeholder="Comments" className=" add-cat border p-2 mt-2" /><br/>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-2">Add Expense</button>
    </form>
  );
};

export default AddExpense;
/*import React, { useState, useContext } from 'react';
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

export default AddExpense;*/
// addExpense.js
import React, { useEffect, useState } from 'react';

const AddExpense = ({ addExpense, editingExpense }) => {
  const [form, setForm] = useState({
    category: '',
    amount: '',
    comments: ''
  });

  useEffect(() => {
    if (editingExpense) {
      setForm({
        category: editingExpense.category,
        amount: editingExpense.amount,
        comments: editingExpense.comments || ''
      });
    } else {
      setForm({ category: '', amount: '', comments: '' });
    }
  }, [editingExpense]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(form);
    setForm({ category: '', amount: '', comments: '' });
  };

  return (
    <div>
      <h4>{editingExpense ? "Edit Expense" : "Add Expense"}</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <input type="text" name="category" className="form-control" placeholder="Category" value={form.category} onChange={handleChange} required />
        </div>
        <div className="mb-2">
          <input type="number" name="amount" className="form-control" placeholder="Amount" value={form.amount} onChange={handleChange} required />
        </div>
        <div className="mb-2">
          <textarea name="comments" className="form-control" placeholder="Comments (optional)" value={form.comments} onChange={handleChange}></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          {editingExpense ? "Update Expense" : "Add Expense"}
        </button>
      </form>
    </div>
  );
};

export default AddExpense;








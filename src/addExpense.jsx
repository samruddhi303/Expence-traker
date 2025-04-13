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








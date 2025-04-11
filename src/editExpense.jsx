// editExpense.jsx
import React, { useContext, useState, useEffect } from 'react';
import { ExpenseContext } from './ExpenseContext';

const EditExpense = () => {
  const { expenses, editExpense } = useContext(ExpenseContext);
  const [selectedId, setSelectedId] = useState(null);
  const [formData, setFormData] = useState({
    category: '',
    amount: '',
    comments: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedId) {
      const selected = expenses.find(e => e._id === selectedId);
      if (selected) {
        setFormData({
          category: selected.category,
          amount: selected.amount,
          comments: selected.comments || ''
        });
      }
    }
  }, [selectedId, expenses]);

  const handleSelect = (id) => {
    setLoading(true);
    setTimeout(() => {
      setSelectedId(id);
      setLoading(false);
    }, 300); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await editExpense(selectedId, formData);
      setSelectedId(null);
      setFormData({ category: '', amount: '', comments: '' });
    } catch (err) {
      console.error("Failed to update expense:", err);
    }
    setLoading(false);
  };

  return (
    <div className="container border p-3  mt-4">
      <h3>Edit Expense</h3>
      {loading && <p className="text-info">Loading...</p>}
        
      <ul className="list-group mb-4">
        {expenses.map(exp => (
          <li key={exp._id} className="list-group-item d-flex justify-content-between">
            <span>{exp.category} - ${exp.amount}</span>
            <button className="btn btn-sm btn-outline-primary" onClick={() => handleSelect(exp._id)}>
              Edit
            </button>
          </li>
        ))}
      </ul>

      {selectedId && (
        <form onSubmit={handleSubmit} className="border p-3 bg-light rounded">
          <h5>Editing: {formData.category}</h5>
          <div className="mb-2">
            <label className="form-label">Category</label>
            <input type="text" name="category" className="form-control" value={formData.category} onChange={handleChange} required />
          </div>
          <div className="mb-2">
            <label className="form-label">Amount</label>
            <input type="number" name="amount" className="form-control" value={formData.amount} onChange={handleChange} required />
          </div>
          <div className="mb-2">
            <label className="form-label">Comments</label>
            <textarea name="comments" className="form-control" value={formData.comments} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-success" disabled={loading}>
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </form>
      )}
    </div>
  );
};

export default EditExpense;





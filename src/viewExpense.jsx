/*import React, { useContext } from 'react';
import { ExpenseContext } from './ExpenseContext';
import "./viewExpense.css"

const ViewExpense = () => {
  const { expenses } = useContext(ExpenseContext);

  return (
    <table className=" table-expense table table-bordered table-striped mt-4">
      <thead className="table-light">
        <tr>
          <th>Category</th>
          <th>Amount</th>
          <th>Comments</th>
          <th>Created At</th>
          <th>Updated At</th>
        </tr>
      </thead>
      <tbody>
        {[...expenses].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map(exp => (
          <tr key={exp._id}>
            <td>{exp.category}</td>
            <td>{exp.amount}</td>
            <td>{exp.comments}</td>
            <td>{new Date(exp.createdAt).toLocaleString()}</td>
            <td>{new Date(exp.updatedAt).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ViewExpense;*/
import React from 'react';

const ViewExpense = ({ expenses, onDelete, onEdit }) => {
  return (
    <div>
      <h4>View Expenses</h4>
      {expenses.length === 0 ? (
        <p className="text-muted">No expenses added yet.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Category</th>
              <th>Amount</th>
              <th>Comments</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {[...expenses].reverse().map(exp => (
              <tr key={exp.id}>
                <td>{exp.category}</td>
                <td>${exp.amount}</td>
                <td>{exp.comments}</td>
                <td>{new Date(exp.createdAt).toLocaleString()}</td>
                <td>
                  <button className="btn btn-sm btn-warning me-2" onClick={() => onEdit(exp)}>Edit</button>
                  <button className="btn btn-sm btn-danger" onClick={() => onDelete(exp.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewExpense;











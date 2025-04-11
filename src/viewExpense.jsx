import React, { useContext } from 'react';
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

export default ViewExpense;
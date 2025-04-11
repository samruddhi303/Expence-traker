import React, { useContext } from 'react';
import { ExpenseContext } from './ExpenseContext';

const DeleteExpense = () => {
  const { expenses, deleteExpense } = useContext(ExpenseContext);

  return (
    <table className="w-full mt-4 border">
      <thead>
        <tr>
          <th>Category</th>
          <th>Amount</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map(exp => (
          <tr key={exp._id} className="border-t">
            <td>{exp.category}</td>
            <td>{exp.amount}</td>
            <td>
              <button onClick={() => deleteExpense(exp._id)} className="text-red-500">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DeleteExpense;
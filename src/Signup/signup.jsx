/*import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('/api/signup', formData);
    alert('Signup successful!');
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h4 className="mb-3">Sign Up</h4>
        <form onSubmit={handleSubmit}>
          <input className="form-control mb-2" type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input className="form-control mb-3" type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <button className="btn btn-primary w-100" type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;*/
// src/components/Signup.js


import React from 'react';

const Signup = () => {
  return (
    <div>
      <h2>Sign Up Page</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;

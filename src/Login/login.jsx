import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.post('/api/login', formData);
    localStorage.setItem('token', res.data.token);
    alert('Login successful');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="border p-2" /><br/>
      <input name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Password" required className="border p-2 mt-2" /><br/>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-2">Login</button>
    </form>
  );
};

export default Login;
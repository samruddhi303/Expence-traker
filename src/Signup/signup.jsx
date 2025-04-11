import React, { useState,useEffect } from 'react';
import axios from 'axios';



const Signup = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('/api/signup', formData);
    alert('Signup successful');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="border p-2" /><br/>
      <input name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Password" required className="border p-2 mt-2" /><br/>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 mt-2">Sign Up</button>
    </form>
  );
};

export default Signup;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import axios from 'axios';
import { Home } from './Home';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/login`, { email, password });
  
      console.log('Login successful:', response.data);
  
      // Check if token is in response.data (adjust as per your API response)
      if (response.data.token) {
        login(response.data.token);
        navigate('/');
      } else {
        alert('Login failed: No token received');
      }
    } catch (error) {
      if (error.response) {
        console.error('Server responded with:', error.response.data);
        alert(error.response.data.message || 'Login failed. Please check your credentials and try again.');
      } else if (error.request) {
        console.error('No response received:', error.request);
        alert('No response from server. Please try again later.');
      } else {
        console.error('Error setting up request:', error.message);
        alert('Something went wrong. Please try again.');
      }
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-gray-300 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login to IRCTC</h2>
        <form onSubmit={onSubmitHandler} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded focus:outline-0 focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 bo rder rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  const [user,setUser] = useState({
    email:"",
    password:"",
  })
  const handelInputChange=(e)=>{
    const {name,value} = e.target;
    setUser((prev)=>({...prev,[name]:value}));
  }
  const handelSubmit=(event)=>{
    event.preventDefault();
    console.log(user);
    
  }

  return (
    <div className="flex items-center justify-center h-[91vh]  bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>
      <form onSubmit={handelSubmit} className="mt-6">
        <div>
          <label className="block text-gray-700">Email</label>
          <input 
            type="email" 
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
            placeholder="Enter your email" 
            name='email'
            required
            value={user.email}
            onChange={handelInputChange}
          />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700">Password</label>
          <input 
            type="password" 
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
            placeholder="Enter your password" 
            name='password'
            required
            value={user.password}
            onChange={handelInputChange}
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white py-2 mt-6 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-center text-gray-600">Don't have an account? 
        <Link to="/register" className="text-blue-500 font-semibold hover:underline"> Register</Link>
      </p>
    </div>
  </div>
);
};

export default Login
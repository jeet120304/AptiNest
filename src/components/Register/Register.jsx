import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const [user,setUser] = useState({
    fullName:"",
    email:"",
    password:"",
  })

  //input handel
  const handleInputChange=(e)=>{
    const {name,value} = e.target;
    setUser((prev)=>({...prev,[name]:value}));
  }

  //form submit
  const handelSubmit=(event)=>{
    event.preventDefault();
    console.log(user);
  }

  return (
    <div className="flex items-center justify-center h-[91vh] bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800">Register</h2>

        <form onSubmit={handelSubmit} className="mt-6">
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input 
              type="text" 
              name="fullName"
              required
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
              placeholder="Enter your full name" 
              value={user.fullName}
              onChange={handleInputChange}
             
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Email</label>
            <input 
              type="email" 
              name="email"
              required
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
              placeholder="Enter your email" 
              value={user.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Password</label>
            <input 
              type="password" 
              name="password"
              required
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
              placeholder="Enter your password" 
              value={user.password}
              onChange={handleInputChange}
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 mt-6 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">Already have an account? 
          <Link to="/login" className="text-blue-500 font-semibold hover:underline"> Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
'use client'
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'

const Form = () => {
  const [user, setuser] = useState({ firstName: '', lastName: '', phone: '', email: '', department: '', message: '' });

  const handleClick = async () => {
    try {
      const response = await fetch('/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        // Handle success
        console.log('Form data sent successfully');
      } else {
        // Handle errors
        console.error('Failed to send form data');
      }
    } catch (error) {
      console.error('Error sending form data', error);
    } finally {
      setuser({ firstName: '', lastName: '', phone: '', email: '', department: '', message: '' })
    }
  }
  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className='flex justify-center'>
      <div className="w-1/2  ">

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
          <input name='firstName' onChange={handleChange} value={user.firstName} className="w-full border border-purple-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="First Name" />
          <input name='lastName' onChange={handleChange} value={user.lastName} className="w-full border border-purple-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="Last Name" />
          <input name='phone' onChange={handleChange} value={user.phone} className="w-full border border-purple-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="number" placeholder="Phone Number" />
          <input name='email' onChange={handleChange} value={user.email} className="w-full border border-purple-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email" placeholder="Email Address" />
        </div>
        <select name='department' onChange={handleChange} className="w-full border border-purple-100 text-gray-900  mt-6 p-3 rounded-lg focus:outline-none focus:shadow-outline">
          <option selected disabled>select department</option>
          <option value={"science"}>science</option>
          <option value={"mechanical"}>mechanical</option>
          <option value={"civil"}>civil</option>
        </select>
        <div className="my-4">
          <textarea name='message' onChange={handleChange} value={user.message} placeholder="Message" className="w-full h-32 border border-purple-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
        </div>
        <div className="my-2 w-1/2 lg:w-1/6 float-right">
          <button onClick={() => handleClick()} className="uppercase text-sm font-bold tracking-wide bg-pink-500 text-gray-50 p-3 rounded-xl w-full 
                       focus:outline-none focus:shadow-outline">
            Submit
          </button>
        </div>
      </div>
      <div className='bg-gradient-to-tr ml-[3rem] mt-[2rem] from-cyan-200 space-y-4 text-sm to-green-100 rounded-xl p-[2rem] h-fit'>
        <p><span className='text-blue-800 text-xl font-bold'>Phone</span><br />888-409-8976</p>
        <p><span className='text-blue-800 text-xl font-bold'>Front Desk</span><br />Monday-Friday 8:30 AM - 5:00 PM</p>
        <p><span className='text-blue-800 text-xl font-bold'>Appointments</span><br />Available 24/7</p>
      </div>
    </div>
  )
}

export default Form
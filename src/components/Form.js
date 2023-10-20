/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Form = () => {
  return (
    <div className='flex justify-center'>
      <div className="w-1/2  ">

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
          <input className="w-full border border-purple-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="First Name" />
          <input className="w-full border border-purple-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="Last Name" />
          <input className="w-full border border-purple-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="number" placeholder="Phone Number" />
          <input className="w-full border border-purple-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email" placeholder="Email Address" />
        </div>
        <select className="w-full border border-purple-100 text-gray-900  mt-6 p-3 rounded-lg focus:outline-none focus:shadow-outline">
          <option>science</option>
          <option>mechanical</option>
          <option>civil</option>
        </select>
        <div className="my-4">
          <textarea placeholder="Message" className="w-full h-32 border border-purple-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
        </div>
        <div className="my-2 w-1/2 lg:w-1/6 float-right">
          <button className="uppercase text-sm font-bold tracking-wide bg-pink-500 text-gray-50 p-3 rounded-xl w-full 
                       focus:outline-none focus:shadow-outline">
            Submit
          </button>
        </div>
      </div>
      <div className='bg-gradient-to-tr ml-[3rem] mt-[2rem] from-cyan-200 space-y-4 text-sm to-green-100 rounded-xl p-[2rem] h-fit'>
        <p><span className='text-blue-800 text-xl font-bold'>Phone</span><br/>888-409-8976</p>
        <p><span className='text-blue-800 text-xl font-bold'>Front Desk</span><br/>Monday-Friday 8:30 AM - 5:00 PM</p>
        <p><span className='text-blue-800 text-xl font-bold'>Appointments</span><br/>Available 24/7</p>
      </div>
    </div>
  )
}

export default Form
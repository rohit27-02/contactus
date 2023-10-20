/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Intro = () => {
  return (
    <div className='flex p-[5rem]'>
      <img src='/Contact-us/img-01.webp' alt='intro'/>
      <div className='flex flex-col ml-[5rem] gap-[1.5rem] justify-center'>
        <h1 className='text-4xl font-extrabold text-sky-800'>Have a question? <br/><span className='text-pink-500'>We&apos;re here to help.</span></h1>
        <p>To make an appointment with one of the clinicans at Insight Therapy Solutions, you can simply fill out your information, using our convenient form below. Someone from our staff will resond to you within 24 hours to answer any questions or schedule your online appointment. You can also give us a call at <span className='text-pink-500 font-bold'>888-409-8976</span> if you prefer. We look forward to hearing from you.</p>
        <button className='text-white bg-violet-900 px-6 py-2 w-fit rounded-xl'>Send Message</button>
      </div>
    </div>
  )
}

export default Intro
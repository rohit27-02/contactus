/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Services = ['Anger Management Therapy','Anxiety Therapy',"Children's Therapy",'Couples Therapy','Depression Therapy','Elderly Therapy','ASL Therapy','Family Therapy','Grief and Trauma Therapy','Individual Therapy','Telehealth Counseling','Match Making Services','Group Therapy']
const Companies = ['Find a Therapist','Free Mental Health Tests','Insurance Coverage','Emergency Resources','For Therapists','For Businesses','Privacy and conditions','Accessibility']
const About = ['About Us','Our Clinicians','Our Team','FAQs','Blogs','Capability Statement','Contact Us']

const Footer = () => {
  return (
    <footer className='h-[38rem] relative bg-slate-50  '>

      <div className='flex w-fit mx-auto gap-[5rem] py-[3rem]'>
        <div className='text-pink-500 space-y-4'>
          <img src='/logo.png' alt='logo' />
          <p><span className='text-gray-500 text-sm'>Technical support:</span><br />888-409-8976</p>
          <p><span className='text-gray-500 text-sm'>Email Us:</span><br />team@insight.com</p>
          <p><span className='text-gray-500 text-sm'>Customer support</span><br />Emergency resources</p>
          <div>
            <p className='text-gray-500 text-sm'>Follow Us</p>
            <div className='flex gap-2 mt-1'>
              <img className='w-6' src='/Contact-us/instagram.svg' alt='instagram' />
              <img className='w-6' src='/Contact-us/facebook.svg' alt='facebook' />
              <img className='w-6' src='/Contact-us/twitter.svg' alt='twitter' />
            </div>
          </div>
        </div>

        {/* services  */}
        <div className='text-gray-500 space-y-2'>
          <h1 className='mb-6 text-xl font-bold text-sky-800'>Services</h1>
          {Services.map((service) => {
            return <div key={service}>{service}</div>
          })}
        </div>

        {/* company  */}
        <div className='text-gray-500 space-y-2'>
          <h1 className='mb-6 text-xl font-bold text-sky-800'>Company</h1>
          {Companies.map((company) => {
            return <div key={company}>{company}</div>
          })}
        </div>

        {/* about  */}
        <div className='text-gray-500 space-y-2'>
          <h1 className='mb-6 text-xl font-bold text-sky-800'>About</h1>
          {About.map((about) => {
            return <div key={about}>{about}</div>
          })}
        </div>
      </div>

      <div className='flex text-sm items-center bg-violet-50 py-4 text-gray-500 justify-center w-full absolute bottom-0'>
        <img src='/Contact-us/alert.webp' className='w-5 h-5' alt='alert' />
        <p className='ml-4'>If you are in life threatening situation - don&apos;t use site.<span className='text-pink-500 font-medium'> Call Emergency to get immediate help. </span></p>
        <p className='ml-28'>All rights reserved © 2023</p>
      </div>

    </footer>
  )
}

export default Footer
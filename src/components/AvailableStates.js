/* eslint-disable @next/next/no-img-element */
import React from 'react'
import fs from 'fs';
import path from 'path';

const States = () => {
  const allimages = fs.readdirSync(path.resolve(`public/states/`));
  console.log(allimages)
  return (
    <div className='w-[60rem] mx-auto '>
      <h1 className='text-3xl  my-[3rem] text-sky-800 font-bold'>Teletherapy Available In The Following States:</h1>
      <div className='grid grid-cols-4 gap-[1rem]'>
        {
          allimages?.map((state) => {
            return <div key={state} className='flex items-center gap-4'>
              <img className='w-10 h-6' src={"/states/" + state} alt={state} />
              <p>{state}</p>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default States
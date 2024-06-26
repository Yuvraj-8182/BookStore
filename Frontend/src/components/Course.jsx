import React from 'react';
import Cards from './Cards';
import list from '../../public/list.json';
import {Link} from 'react-router-dom';

function Course() {
  return (
    <>
        <div className='max-w-screen-xxl container mx-auto md:px-20 px-4'>
          <div className='mt-24 items-center justify-center text-center'>
            <h1 className='text-2xl  md:text-4xl'>We're delighted to have you <span className='text-pink-500'>here!! :)</span></h1>
            <p className='mt-12'>Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.
        Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.</p>
         <Link to='/'>
         <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>Back</button>
         </Link>
          </div>

          <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
            {
             list.map((item)=>(
                      <Cards key={item.id} item={item}/>
             ))   
            }
          </div>
        </div>
    </>
  )
}

export default Course
import React from 'react'
import PageNotFoundImage from '../assets/pagenotfound.png';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
export const PageNotFound = () => {
  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col items-center my-4'>
          <p className='text-7xl tet-gray-700 font-bold my-10 dark:text-white'>404,oops!</p>
          <div className='max-w-lg'>
            <img className='rounded' src={PageNotFoundImage} />
          </div>
        </div>
        <div className='flex justify-center my-4'>
          <Link to="/">
            <Button>Back To Cinemate</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

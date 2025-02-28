import React from 'react'
import { FaCheck } from "react-icons/fa6";


const Welcome = () => {
  return (
    <div className='w-full flex items-center justify-center flex-col font-semibold'>
        <h1>Welcome to E - <span className='text-red-500'>Date</span></h1>
        <p className='text-neut_100 font-medium'>Please follow these house rules</p>
        <ul className='mt-4 flex flex-col items-start justify-center gap-4'>
            <li>
                <div className='flex items-center justify-start gap-2'>
                <FaCheck className='text-red-500'/> 
                <h1>Be yourself</h1>
                </div>
                <p className='text-sm text-neut_100'>Make sure your photos, age, and bio are 
                truely to who you are.</p>
            </li>
            <li>
                <div className='flex items-center justify-start gap-2'>
                <FaCheck className='text-red-500'/> 
                <h1>Stay safe</h1>
                </div>
                <p className='text-sm text-neut_100'>Don’t be too quick to give out personal information. Date Safely.</p>
            </li>
        </ul>
    </div>
  )
}

export default Welcome
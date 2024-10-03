import React from 'react'
import { assets } from '../assets/frontend_assets/assets.js'
const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img src={assets.logo} alt="logo" className='mb-5 w-32' />
          <p className='w-full  md:w-2/3 text-gray-600'>
            Shopping in-store can be a fun social activity with friends or family. It allows for shared opinions and style advice, enhancing the shopping experience.
          </p>
        </div>
         <div>
          <p className='text-xl font-medium mb-5 '> COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
             </ul>
         </div>
         <div>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
          <li>+1-222-456-7890</li>
          <li>wehiv32129@hraifi.com</li>
        </ul>
      </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'> Copyright 2022@ forever.com - All rights reserved.</p>

      </div>
     
    </div>
  )
}

export default Footer
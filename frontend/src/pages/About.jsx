import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLattter from '../components/NewsLattter'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row  gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="about" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-800'>
          <p>Forever Clothes is an innovative online retail brand that focuses on providing sustainable and stylish clothing options. The brand emphasizes quality and durability, offering a range of apparel for men, women, and children. With a commitment to eco-friendly materials and ethical manufacturing practices, Forever Clothes aims to promote a more sustainable approach to fashion, moving away from fast fashion trends.</p>
          <p>The brand also often engages in social responsibility initiatives, highlighting its efforts to contribute positively to communities and the environment. Overall, Forever Clothes is positioned as a brand for conscious consumers who value quality and sustainability in their wardrobe choices</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission forever is to empower customer with choice , convinence , and  confidence we're  dedicated to providing a seamles  shopping experience that makes you feel good about what you buy and how you live . from browing and ordering to delivery and beyond. </p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>"At Forever , we believe in crafting clothing that's as durable as it is stylish. Our commitment to quality ensures each piece stands the test of time. </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Your satisfaction is our priority. Our dedicated customer service team is always ready to assist you, ensuring a hassle-free shopping journey from start to finish. </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer service :</b>
          <p className='text-gray-600'>We believe that every customer deserves personalized attention. Our dedicated team is committed to providing exceptional customer service, ensuring you have a positive and satisfying shopping experience. </p>
        </div>
      </div>
      <NewsLattter />
    </div>
  )
}

export default About
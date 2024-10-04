import React from 'react'

const NewsLattter = () => {

    // Form submission function goes here
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <div className='text-center'>
            <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
            <p className='text-gray-400 mt-3'>
                Stay informed about our latest collections, exclusive offers, and exclusive promotions. Sign up for our news to receive these updates.
            </p>
            <form onSubmit={onSubmitHandler} className=' w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3' >
                <input className='w-full sm:flex-1 outline-none' required type="text" placeholder='Enter your email' />
                <button type='submit' className='bg-black text-white text-xs px-10 py-4 '>SUBSCRIBE</button>
            </form>
        </div>
    )
}

export default NewsLattter
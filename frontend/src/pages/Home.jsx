import React from 'react'
import Hero from '../components/Hero.jsx'
import LetestCollection from '../components/LetestCollection.jsx'
import BestSeller from '../components/BestSeller.jsx'
import OurPolicy from '../components/OurPolicy.jsx'
import NewsLattter from '../components/NewsLattter.jsx'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LetestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsLattter/>
    </div>
  )
}

export default Home
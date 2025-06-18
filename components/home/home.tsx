import React from 'react'
import { Hero } from './hero'
import Navbar from '../navbar'
import About from './about'

const Home = () => {
  return (
    <div className='w-full'>
    <Navbar/>
    <Hero/>
    <About/>
    </div>
  )
}

export default Home
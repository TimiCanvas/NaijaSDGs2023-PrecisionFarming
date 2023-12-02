import React from 'react'
import Hero from './Hero'
import Features from './Features'
import Works from './Works'
import Team from './Team'
import Contact from './Contact'
const Home = () => {
  return (
    <div  className='h-screen bg-[#1E1E1E]'>
        <Hero />
       <Features />
       <Works />
       <Team />
       <Contact />
    </div>
  )
}

export default Home
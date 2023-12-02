import { useState } from 'react'
import Navbar from './Navbar'
import './App.css'
import Hero from './Hero'
import Features from './Features'
import Works from './Works'
import Team from './Team'
import Contact from './Contact'

function App() {
 

  return (

      <div className='h-screen bg-[#1E1E1E]'>
       <Navbar />
       <Hero />
       <Features />
       <Works />
       <Team />
       <Contact />
    </div>

  )
}

export default App

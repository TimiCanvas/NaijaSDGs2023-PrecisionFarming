import React,{useState} from 'react'

const Navbar = () => {
  return (
    <div className=' h-[80px] p-4 flex justify-around border-b-[1px] border-b-slate-400'>

        <p className='text-slate-200'>Agrisage</p>
        <div className='text-slate-200 flex gap-[20px]'>
            <p>Features</p>
            <p>How it works </p>
             <p>About us</p>
              <p>Contact us</p>
        </div>
        <button className='border-2 border-white text-sm  p-[10px] text-slate-200 h-[40px] rounded-[5px]'>Get Started</button>
    </div>
  )
}

export default Navbar
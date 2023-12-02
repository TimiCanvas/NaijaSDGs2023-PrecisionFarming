import { useState } from 'react'
import Navbar from './Navbar'
import './App.css'
import {  Routes, Route } from "react-router-dom";
import Home from './Home'
import Query from './Query';
import Answer from './Answer';
function App() {
  const [crop, setCrop] = useState("");
  const [country, setCountry] = useState("");
  const [waterlevel, setWaterlevel] = useState("");
  const [humidity, setHumidity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [info, setInfo] = useState(null);
  const [ph, setPh] = useState("");

  return (

      <div className='h-screen bg-[#1E1E1E]'>
         <Navbar />
        <Routes>
        <Route path='/' element={  <Home />} />
        <Route path='/query' element={  <Query crop={crop} setCrop={setCrop} 
        country={country} setCountry={setCountry}
        waterlevel={waterlevel} setWaterlevel={setWaterlevel}
        humidity={humidity} setHumidity ={setHumidity}
        ph={ph} setPh={setPh}
        temperature ={temperature} setTemperature={setTemperature}
        info={info} setInfo={setInfo}
        />} />
        <Route path='/answer' element={<Answer info={info} />} />
      </Routes>
    </div>

  )
}

export default App

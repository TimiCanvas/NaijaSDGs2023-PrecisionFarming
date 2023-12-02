import React from 'react'
import { useNavigate } from "react-router-dom";
import Axios from 'axios';
import './Feature.css'

const Query = ({country, setCountry, crop, setCrop, waterlevel, setWaterlevel, ph, setPh, 
    temperature, setTemperature, humidity, setHumidity, info, setInfo}) => {
    const getCountry = (e) => {
        setCountry(e.target.value);
      };
      const getCrop = (e) => {
        setCrop(e.target.value);
      };
      const getPh = (e) => {
        setPh(e.target.value);
      };
      const getWater = (e) => {
        setWaterlevel(e.target.value);
      };
      const getHumid = (e) => {
        setHumidity(e.target.value);
      };
      const getTemp = (e) => {
        setTemperature(e.target.value);
      };
    
      const navigate= useNavigate()

      const addInfo = (e) => {
        const jsonData = {
          temperature,
          humidity,
          ph,
          water_level: waterlevel,
          crop,
          country,
        };
      
        // Set loading to true when starting the API call
      
      
        Axios.post(
          "https://klusterthon-precision-farming.onrender.com/result",
          jsonData,
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((response) => {
          // Process the response as needed
          setInfo(response.data);
          console.log(info)
          navigate('/answer')
        })
        .catch((error) => {
          // Handle errors if necessary
          console.error("Error fetching data:", error);
        });
      };
      
    
  return (
    <div>
        <div name='query' className="flex items-center    justify-center align-center  p-4 ">
         <p className='text-white text-center mt-[70px]'>To predict your crop's harvest season, kindly fill in your <br /> crop's name, soil condition, weather information and <br /> location in the boxes provided below </p>
        </div>
        <div className='flex justify-center items-center'>
        <div className='flex text-white flex-col border-[0.5px] rounded-[10px] p-[30px] w-[600px] fillBox items-center justify-center gap-[20px]'>
        <input
          type="text"
          placeholder="input temperature"
          value={temperature}
          onChange={getTemp}
          className="lg:w-[500px] bg-[#1e1e1e] rounded-[10px] xs:w-[80vw] sm:w-[50vw] p-4  border-[0.5px]"
        />
        <input
          type="text"
          placeholder="input the humidity"
          value={humidity}
          onChange={getHumid}
          className="  bg-[#1e1e1e]  lg:w-[500px] xs:w-[80vw] sm:w-[50vw] rounded-[10px] p-4 border-[0.5px]"
        />
        <input
          type="text"
          value={ph}
          onChange={getPh}
          placeholder="input the PH"
          className="lg:w-[500px] bg-[#1e1e1e] rounded-[10px] xs:w-[80vw] sm:w-[50vw] p-4  border-[0.5px]"
        />
        <input
          type="text"
          value={waterlevel}
          onChange={getWater}
          placeholder="input the waterlevel"
          className=" border-[0.5px] bg-[#1e1e1e]  lg:w-[500px] xs:w-[80vw] sm:w-[50vw] rounded-[10px] p-4"
        />
        <input
          type="text"
          value={crop}
          onChange={getCrop}
          placeholder="input the name of crop"
          className="lg:w-[500px] bg-[#1e1e1e] rounded-[10px] xs:w-[80vw] sm:w-[50vw] p-4  border-[0.5px]"
        />
        <input
          type="text"
          value={country}
          onChange={getCountry}
          placeholder="input the name of the country"
          className=" border-[0.5px] bg-[#1e1e1e]  lg:w-[500px] xs:w-[80vw] sm:w-[50vw] rounded-[10px] p-4"
        />
         <div className='flex justify-center items-center mt-[10px]'>
            <button onClick={addInfo} className='bg-green-900 text-white lg:w-[500px] sm:w-[40vw] btn rounded-[10px] shadow-lg h-[50px]'>Send</button>
        </div>
        </div>
        </div>

    </div>
  )
}

export default Query
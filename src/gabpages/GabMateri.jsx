import React, { useState, useEffect, useRef } from 'react'
import Materi from '../pages/materi/Materi'
import Materi3 from '../pages/materi/Materi3'
import Welcome from '../images/melek.png'
import Sidebar from '../auth/Sidebar';
import audioKerpre from '../audio/kerpre.mp3'

export default function GabMateri() {

  const [ results, setResults ] = useState({
    name: "",
    nilai: 0,
    jawab: "",
    kuis: ""
  });

  const audio = useRef(new Audio(audioKerpre))
  const [isPlaying, setIsPlaying] = useState(false);
  const handleToggleAudio = () => {
    if (isPlaying) {
      audio.current.pause();
    } else {
      audio.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleResultHistory = async () => {
    try {
      let temp_data = []
      const response = await fetch('https://servers-pa.vercel.app/api/result'); 
      const data = await response.json();
      for(let i = 0; i < data.length; i++){
        if(data[i].username == sessionStorage.getItem('name')){
          temp_data.push({
            name: data[i].username,
            nilai: data[i].points,
            jawab: data[i].attempts,
            kuis: data[i].achived
          })
        }
      }
      setResults(
        {
          name: temp_data[0].name,
          nilai: temp_data[0].nilai,
          jawab: temp_data[0].jawab,
          kuis: temp_data[0].kuis
        }
      )
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    handleResultHistory();
  }, [results.name || results])

  return (
    <div>
      {results.name ? (
      results.nilai < 80 ? 
        <Materi />
      :
        <Materi3 />
      ) : (
        <div>
        <Sidebar/>
          <div className="p-4 sm:ml-64">
          <div className="p-4  mt-14">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="col-span-2 justify-center items-center rounded-lg bg-gray-50 h-fulll dark:bg-gray-800">
                <p className='mt-24 text-xl font-bold text-[#9A3B3B] text-center my-5'>Kerjakan Prestest Dulu yaa!</p>
              </div>
              <div className="flex flex-col items-center justify-center border-yellow-700 border-2 rounded-xl drop-shadow-xl">
                <img className='w-52' alt='' src={Welcome}/>
                    <p className="text-[#9A3B3B] mt-4 text-center">Kerjakan Prestest Dulu yaa!</p>
              </div>
              <div className='flex flex-col col-span-3 items-end justify-end mr-28'>
                <button onClick={handleToggleAudio} className="bg-[#9A3B3B] px-4 py-2 text-white rounded-lg">
                  {isPlaying ? 'Pause Joko' : 'Suara Joko'}
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>
      )}
    </div>
  )
}

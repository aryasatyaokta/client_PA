import Sidebar from '../../auth/Sidebar'
import Nangis from '../../images/nangis.png'
import Kagum from '../../images/kagum.png'
import React, {useEffect} from 'react'
// import '../styles/Result.css';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { attempts_Number, earnPoints_Number, flagResult } from '../../helper/helper';

/** import actions  */
import { usePublishResult } from '../../hooks/setResult';

import audioNilaiKurang from '../../audio/audio_nilai_kurang.mp3'
import audioNilaiCukup from '../../audio/audio_nilai_cukup.mp3'

export default function Result() {
    // const { questions : { queue ,answers}, result : { result, userId}}  = useSelector(state => state)
    const { questions : { queue ,answers}, result : { result, userId}}  = useSelector(state => state)


    const totalPoints = queue.length * 20; 
    const attempts = attempts_Number(result);
    const earnPoints = earnPoints_Number(result, answers, 20)
    const flag = flagResult(totalPoints, earnPoints)


    /** store user result */
    usePublishResult({ 
        result, 
        username : userId,
        attempts,
        points: earnPoints,
        achived : flag ? "Passed" : "Failed" });

    useEffect(() => {
      if (earnPoints < 80) {
        const audioElement = new Audio(audioNilaiKurang);
        audioElement.play();
      } else if (earnPoints >= 80) {
        const audioElement = new Audio(audioNilaiCukup);
        audioElement.play();
      }
    }, [earnPoints]);

  return (
    <div>
      <Sidebar/>
        <div className="p-4 sm:ml-64">
        <div className="p-4  mt-14">
          <div className="grid grid-cols-3 gap-4 mb-4 font-[Poppins]">
            <div className="col-span-2 justify-center items-center rounded-lg bg-gray-50 h-[600px] dark:bg-gray-800">
              <p className='text-xl font-bold text-[#9A3B3B] text-center my-5'>Pretest Aksara Jawa</p>
              <div className=''>
                <p className="text-lg font-semibold text-[#6E6E6E] text-center">Soal Kelas 5 SD</p>
              </div>
              <div className='flex flex-col items-center my-10'>
                <div className='py-4 border-2 border-[#9A3B3B] w-1/2 h-full'>
                  <div className='flex justify-between px-2'>
                    <span>Username :</span>
                    <span className='font-bold'>{userId || 0}</span>
                  </div>
                  <div className='flex justify-between px-2 py-2'>
                    <span>Total Quiz Points : </span>
                    <span className='font-bold'>{totalPoints || 0}</span>
                  </div>
                  <div className='flex justify-between px-2 py-2'>
                    <span>Total Questions :</span>
                    <span className='font-bold'>{queue.length || 0}</span>
                  </div>
                  <div className='flex justify-between px-2 py-2'>
                    <span>Total Attempts :</span>
                    <span className='font-bold'>{attempts || 0}</span>
                  </div>
                  <div className='flex justify-between px-2 py-2'>
                    <span>Total Earn Points :</span>
                    <span className='font-bold'>{earnPoints || 0}</span>
                  </div>
                  <div className='flex justify-between px-2 py-2'>
                    <span>Quiz Result :</span>
                    <span style={{color : `${flag ? "#82CD47" : "#ff2a66"}`}} className='font-bold'>{flag ? "Passed" : "Failed"}</span>
                  </div>
                </div>  
              </div>

              <div className='flex flex-col items-center justify-center'>
                <Link to='/materii' className='bg-[#9A3B3B] px-16 py-2 text-white rounded-lg'>Selanjutnya</Link>
              </div>
              {/* <div className='my-10'>
                <ResultTable nama={userId}/>
              </div> */}
            </div>
            <div className="flex items-center justify-center border-yellow-700 border-2 rounded-xl drop-shadow-xl self-start">
            {earnPoints >= 80 ? (
              <img className='w-52 self-start' alt='' src={Kagum} />
              ) : (
              <img className='w-52 self-start' alt='' src={Nangis} />
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

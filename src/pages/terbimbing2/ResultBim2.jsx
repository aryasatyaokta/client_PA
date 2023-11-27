import Sidebar from '../../auth/Sidebar'
import Nangis from '../../images/nangis.png'
import Kagum from '../../images/kagum.png'
import React from 'react'
// import '../styles/Result.css';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { attempts_NumberBim2, earnPoints_NumberBim2, flagResultBim2 } from '../../helper/helper';

/** import actions  */
import { resetAllActionBim2 } from '../../redux/questionbim2_reducer';
import { usePublishResultBim2 } from '../../hooks/setResult';
import { resetResultActionBim2 } from '../../redux/resultbim2_reducer';


export default function ResultBim2() {

    const dispatch = useDispatch()
    // const { questions : { queue ,answers}, result : { result, userId}}  = useSelector(state => state)
    const { questionBim2: { queueBim2, answerBim2 }, resultBim2: { resultBim2, userIdBim2 } } = useSelector(state => state);



    console.log("Answers:", answerBim2);
    console.log("Result:", resultBim2);
    // console.log("Total Points:", totalPoints);


    const totalPoints = queueBim2.length * 20; 
    const attempts = attempts_NumberBim2(resultBim2);
    const earnPoints = earnPoints_NumberBim2(resultBim2, answerBim2, 20)
    console.log("Earn Points:", earnPoints);
    const flag = flagResultBim2(totalPoints, earnPoints)
    console.log("Flag:", flag);


    /** store user result */
    usePublishResultBim2({ 
        resultBim2, 
        username : userIdBim2,
        attempts,
        points: earnPoints,
        achived : flag ? "Passed" : "Failed" });

    function onRestart(){
        dispatch(resetAllActionBim2())
        dispatch(resetResultActionBim2())
    }

  return (
    <div>
      <Sidebar/>
        <div className="p-4 sm:ml-64">
        <div className="p-4  mt-14">
          <div className="grid grid-cols-3 gap-4 mb-4 font-[Poppins]">
            <div className="col-span-2 justify-center items-center rounded-lg bg-gray-50 h-[600px] dark:bg-gray-800">
              <p className='text-xl font-bold text-[#9A3B3B] text-center my-5'>Hasil Latihan Terbimbing Sandhangan</p>
              <div className=''>
                <p className="text-lg font-semibold text-[#6E6E6E] text-center">Soal Kelas 5 SD</p>
              </div>
              <div className='flex flex-col items-center my-10'>
                <div className='py-4 border-2 border-[#9A3B3B] w-1/2 h-full'>
                  <div className='flex justify-between px-2'>
                    <span>Username :</span>
                    <span className='font-bold'>{userIdBim2 || 0}</span>
                  </div>
                  <div className='flex justify-between px-2 py-2'>
                    <span>Total Quiz Points : </span>
                    <span className='font-bold'>{totalPoints || 0}</span>
                  </div>
                  <div className='flex justify-between px-2 py-2'>
                    <span>Total Questions :</span>
                    <span className='font-bold'>{queueBim2.length || 0}</span>
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
                {earnPoints < 80 ? (
                  <button onClick={onRestart} className='bg-[#9A3B3B] px-16 py-2 text-white rounded-lg'>Restart</button>
                ) : (
                  <Link to='/latihan-mandirii' className='bg-[#9A3B3B] px-16 py-2 text-white rounded-lg'>Next</Link>
                )}
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

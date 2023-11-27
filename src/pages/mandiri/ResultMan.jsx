import Sidebar from '../../auth/Sidebar'
import Nangis from '../../images/nangis.png'
import Kagum from '../../images/kagum.png'
import React from 'react'
// import '../styles/Result.css';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { attempts_NumberMan, earnPoints_NumberMan, flagResultMan } from '../../helper/helper';

/** import actions  */
import { resetAllActionMan } from '../../redux/questionman_reducer';
import { usePublishResultMan} from '../../hooks/setResult';
import { resetResultActionMan } from '../../redux/resultman_reducer';


export default function ResultMan() {

    const dispatch = useDispatch()
    // const { questions : { queue ,answers}, result : { result, userId}}  = useSelector(state => state)
    const { questionMan: { queueMan, answerMan }, resultMan: { resultMan, userIdMan } } = useSelector(state => state);



    console.log("Answers:", answerMan);
    console.log("Result:", resultMan);
    // console.log("Total Points:", totalPoints);


    const totalPoints = queueMan.length * 20; 
    const attempts = attempts_NumberMan(resultMan);
    const earnPoints = earnPoints_NumberMan(resultMan, answerMan, 20)
    console.log("Earn Points:", earnPoints);
    const flag = flagResultMan(totalPoints, earnPoints)
    console.log("Flag:", flag);


    /** store user result */
    usePublishResultMan({ 
        resultMan, 
        username : userIdMan,
        attempts,
        points: earnPoints,
        achived : flag ? "Passed" : "Failed" });

    function onRestart(){
        dispatch(resetAllActionMan())
        dispatch(resetResultActionMan())
    }

  return (
    <div>
      <Sidebar/>
        <div className="p-4 sm:ml-64">
        <div className="p-4  mt-14">
          <div className="grid grid-cols-3 gap-4 mb-4 font-[Poppins]">
            <div className="col-span-2 justify-center items-center rounded-lg bg-gray-50 h-[600px] dark:bg-gray-800">
              <p className='text-xl font-bold text-[#9A3B3B] text-center my-5'>Latihan Mandiri Aksara Jawa</p>
              <div className=''>
                <p className="text-lg font-semibold text-[#6E6E6E] text-center">Soal Kelas 5 SD</p>
              </div>
              <div className='flex flex-col items-center my-10'>
                <div className='py-4 border-2 border-[#9A3B3B] w-1/2 h-full'>
                  <div className='flex justify-between px-2'>
                    <span>Username :</span>
                    <span className='font-bold'>{userIdMan || 0}</span>
                  </div>
                  <div className='flex justify-between px-2 py-2'>
                    <span>Total Quiz Points : </span>
                    <span className='font-bold'>{totalPoints || 0}</span>
                  </div>
                  <div className='flex justify-between px-2 py-2'>
                    <span>Total Questions :</span>
                    <span className='font-bold'>{queueMan.length || 0}</span>
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
                  <Link to='/lat-mandiri' onClick={onRestart} className='bg-[#9A3B3B] px-16 py-2 text-white rounded-lg'>Restart</Link>
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

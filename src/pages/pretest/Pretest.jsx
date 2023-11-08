import React, { useRef } from 'react'
import Sidebar from '../../auth/Sidebar'
import Welcome from '../../images/melek.png'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setUserId } from '../../redux/result_reducer';

export default function Pretest() {
  const inputRef = useRef(null);
  const dispatch = useDispatch()

  function startQuiz(){
    if(inputRef.current?.value){
      dispatch(setUserId(inputRef.current?.value))
    }
  }

  return (
    <div>
        <Sidebar/>
        <div className="p-4 sm:ml-64">
        <div className="p-4  mt-14">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="col-span-2 justify-center items-center rounded-lg bg-gray-50 h-fulll dark:bg-gray-800">
              <p className='text-xl font-bold text-[#9A3B3B] text-center my-5'>Pretest Aksara Jawa</p>
              <div className='mx-2'>
                <p className="text-lg font-semibold text-[#6E6E6E] text-center">Soal Kelas 5 SD</p>
              </div>
              <div className='flex flex-col items-center justify-center my-20'>
                <form id="form">
                  <input className='text-center h-8 focus:outline-none border-2 border-[#9A3B3B] rounded-md' ref={inputRef} type='text' placeholder='Username'/>
                </form>
                <div className='start my-6'>
                  <Link className='btn bg-[#9A3B3B] py-2 px-4 text-white rounded-md' to={'/quiz-pretest'} onClick={startQuiz}>Start Pretest</Link>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center border-yellow-700 border-2 rounded-xl drop-shadow-xl self-start">
              <img className='w-52 self-start' alt='' src={Welcome}/>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

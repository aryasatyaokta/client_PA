import { PushAnswerBim } from '../../hooks/setResult';
import { useState } from 'react';
/** redux store import */
import Sidebar from '../../auth/Sidebar';
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { MoveNextQuestionBim, MovePrevQuestionBim} from '../../hooks/FetchQuestion';
import Welcome from '../../images/melek.png'
import QuestionBim from './QuestionBim';

export default function QuizBim() {

    const [check, setChecked] = useState(undefined)

    const resultBim = useSelector(state => state.resultBim.resultBim);
    const { queueBim, trace } = useSelector(state => state.questionBim);
    const dispatch = useDispatch()

    function onNext(){
        if(trace < queueBim.length){
            dispatch(MoveNextQuestionBim());

            if(resultBim.length <= trace){
                dispatch(PushAnswerBim(check))
            }
        }
        setChecked(undefined)
    }

    function onPrev(){
        if(trace > 0){
            dispatch(MovePrevQuestionBim());
        }
    }

    function onChecked(check){
        setChecked(check)
    }

    if(resultBim.length && resultBim.length >= queueBim.length){
        return <Navigate to={'/hasil-lat-terbimbing'} replace={true}></Navigate>
    }

  return (
    <div>
      <Sidebar/>
        <div className="p-4 sm:ml-64">
        <div className="p-4  mt-14">
          <div className="grid grid-cols-3 gap-4 mb-4 font-[Poppins]">
            <div className="col-span-2 justify-center items-center rounded-lg bg-gray-50 h-[650px] dark:bg-gray-800">
              <p className='text-xl font-bold text-[#9A3B3B] text-center my-5'>Latihan Terbimbing Aksara Jawa</p>
              <div className=''>
                <p className="text-lg font-semibold text-[#6E6E6E] text-center">Soal Kelas 5 SD</p>
              </div>
              <div className='py-10'>
                <div className='mx-24'>
                  <QuestionBim onChecked={onChecked}/>
                </div>
                <div className='flex justify-between px-24 h-8 my-9'>
                  { trace > 0 ? <button className='bg-[#AE9D45] w-40 text-white rounded-sm' onClick={onPrev}>Prev</button> : <div></div> }
                  <button className='bg-[#9A3B3B] w-40 text-white rounded-sm' onClick={onNext}>Next</button>
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

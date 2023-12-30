import { PushAnswerBim } from '../../hooks/setResult';
import React, { useRef, useState} from 'react'
import Sidebar from '../../auth/Sidebar';
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { MoveNextQuestionBim, MovePrevQuestionBim} from '../../hooks/FetchQuestion';
import Welcome from '../../images/ceria.png'
import QuestionBim from './QuestionBim';
import audioBim from '../../audio/audio_bim_soal.mp3'


export default function QuizBim() {

    const [check, setChecked] = useState(undefined)
    const Bimbing = useRef(new Audio(audioBim))
    const [isPlayingBim, setIsPlayingBim] = useState(false);

    const resultBim = useSelector(state => state.resultBim.resultBim);
    const { queueBim, trace } = useSelector(state => state.questionBim);
    const dispatch = useDispatch()

    const handleToggleAudioBim = () => {
      if (isPlayingBim) {
        Bimbing.current.pause();
      } else {
        Bimbing.current.play();
      }
      setIsPlayingBim(!isPlayingBim);
    };


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
              <p className='text-xl font-bold text-[#9A3B3B] text-center my-5'>Latihan Terbimbing Sandhangan</p>
              <div className=''>
                <p className="text-lg font-semibold text-[#6E6E6E] text-center">Soal Kelas 5 SD</p>
              </div>
              <div className='py-10'>
                <div className='mx-24'>
                  <QuestionBim onChecked={onChecked}/>
                </div>
                <div className='flex justify-between px-24 h-8 my-9'>
                  { trace > 0 ? <button className='bg-[#AE9D45] w-40 text-white rounded-sm' onClick={onPrev}>Kembali</button> : <div></div> }
                  <button className='bg-[#9A3B3B] w-40 text-white rounded-sm' onClick={onNext}>Selanjutnya</button>
                </div>
              </div>
            </div>
            <div className="col-span-1 flex flex-col items-center justify-center mb-44">
              <div className="border-yellow-700 border-2 rounded-xl drop-shadow-xl w-80 flex flex-col items-center justify-center">
                <img className="w-52" alt="" src={Welcome} />
                <p className="text-[#9A3B3B] mt-4 text-center">Haloo, jika kamu kesulitan mengerjakan soal, klik button aksara ya untuk membantu kamu</p>
              </div>
              <div className="mt-4">
                <button onClick={handleToggleAudioBim}
                  className="bg-[#9A3B3B] px-4 py-2 text-white rounded-lg"
                >
                  {isPlayingBim ? 'Pause Joko' : 'Suara Joko'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

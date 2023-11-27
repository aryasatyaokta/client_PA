import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
/** Custom Hook */
import { useFetchQestionBim} from '../../hooks/FetchQuestion'
import { updateResult, updateResultStruk } from '../../hooks/setResult'
import { updateResultActionBim } from '../../redux/resultbim_reducer'


export default function QuestionBim({ onChecked }) {

    const [checked, setChecked] = useState(undefined)
    const [{ isLoading, apiData, serverError}] = useFetchQestionBim() 
    const { trace } = useSelector(state => state.questionBim);
    const result = useSelector(state => state.resultBim.resultBim);

    console.log("useSelector(state => state.questions)",useSelector(state => state));

    const questions = useSelector(state => state.questionBim.queueBim[state.questionBim.trace])
    const dispatch = useDispatch()

    console.log("test view",questions);

    useEffect(() => {
        dispatch(updateResultActionBim({ trace, checked}))
    }, [checked])
    
    function onSelect(i){
        onChecked(i)
        setChecked(i)
    }


    if(isLoading) return <h3 className='text-light'>isLoading</h3>
    if(serverError) return <h3 className='text-light'>{serverError || "Unknown Error"}</h3>

  return (
    <div>
        <h2 className='text-left'>{questions?.question}</h2>
        <ul key={questions?.id}>
            {
              questions?.options.map((q, i) => (
                <li className='bulet' key={i}>
                  <input
                      type='radio'
                      value={false}
                      name='options'
                      id={`q${i}-option`}
                      onChange={() => onSelect(i)}
                  />
                  <label htmlFor={`q${i}-option`} className=''>{q}</label>
                  <div className={`check ${result[trace] === i ? 'checked' : '' }`}></div>
                </li>
              )) 
            }
        </ul>
        {/* <div className="struktur-container mt-7 bg-[#9A3B3B] p-4 text-white rounded-xl">
          <p className='mb-3'>Langkah - langkah Pengerjaan: </p>
                {questions?.struktur && (
                    <ul>
                        {questions.struktur.map((struktur, i) => (
                            <li key={i}>{struktur}</li>
                        ))}
                    </ul>
                )}
            </div> */}
    </div>
  )
}

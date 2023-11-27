import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
/** Custom Hook */
import { useFetchQestionStruk } from '../../hooks/FetchQuestion'
import { updateResult, updateResultStruk } from '../../hooks/setResult'


export default function QuestionStruk({ onChecked }) {

    const [checked, setChecked] = useState(undefined)
    const [{ isLoading, apiData, serverError}] = useFetchQestionStruk() 
    const { trace } = useSelector(state => state.questionStruk);
    const result = useSelector(state => state.resultStruk.resultsStruk);

    console.log("useSelector(state => state.questions)",useSelector(state => state));

    const questions = useSelector(state => state.questionStruk.queueStruk[state.questionStruk.trace])
    const dispatch = useDispatch()

    console.log("test view",questions);

    useEffect(() => {
        dispatch(updateResultStruk({ trace, checked}))
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
        <div className="struktur-container mt-7 bg-[#9A3B3B] p-4 text-white rounded-xl">
          <p className='mb-3 text-xl'>Petunjuk: </p>
                {questions?.struktur && (
                    <ul>
                        {questions.struktur.map((struktur, i) => (
                            <li key={i}>{struktur}</li>
                        ))}
                    </ul>
                )}
            </div>
    </div>
  )
}

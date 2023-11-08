import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { getServerData } from "../helper/helper";
import data, {answers} from "../soal/soalPretest"
import dataStruk, {answerStruk} from "../soal/soalTerstruktur"

import * as Action from '../redux/question_reducer'

export const useFetchQestion = () => {
    const dispatch = useDispatch();   
    const [getData, setGetData] = useState({ isLoading : false, apiData : [], serverError: null});

    useEffect(() => {
        setGetData(prev => ({...prev, isLoading : true}));

        (async () => {
            try {
                let question = await data;
                // const [{ questions, answers }] = await getServerData(`http://localhost:5000/api/questions`, (data) => data)
                
                if(question.length > 0){
                    setGetData(prev => ({...prev, isLoading : false}));
                    setGetData(prev => ({...prev, apiData : question}));
                    /** dispatch an action */
                    dispatch(Action.startExamAction({ question, answers }))

                } else{
                    throw new Error("No Question Avalibale");
                }
            } catch (error) {
                setGetData(prev => ({...prev, isLoading : false}));
                setGetData(prev => ({...prev, serverError : error}));
            }
        })();
    }, [dispatch]);

    return [getData, setGetData];
}

/** Terstruktur */

export const useFetchQestionStruk = () => {
    const dispatch = useDispatch();   
    const [getDataStruk, setGetDataStruk] = useState({ isLoading : false, apiData : [], serverError: null});

    useEffect(() => {
        setGetDataStruk(prev => ({...prev, isLoading : true}));

        (async () => {
            try {
                let question = await dataStruk;
                // const [{ questions, answers }] = await getServerData(`http://localhost:5000/api/questions`, (data) => data)
                
                if(question.length > 0){
                    setGetDataStruk(prev => ({...prev, isLoading : false}));
                    setGetDataStruk(prev => ({...prev, apiData : question}));
                    /** dispatch an action */
                    dispatch(Action.startExamAction({ question, answerStruk }))

                } else{
                    throw new Error("No Question Avalibale");
                }
            } catch (error) {
                setGetDataStruk(prev => ({...prev, isLoading : false}));
                setGetDataStruk(prev => ({...prev, serverError : error}));
            }
        })();
    }, [dispatch]);

    return [getDataStruk, setGetDataStruk];
}
/**  */


export const MoveNextQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.moveNextAction());
    } catch (error) {
        console.log(error)
    }
}

export const MovePrevQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.movePrevAction());
    } catch (error) {
        console.log(error)
    }
}


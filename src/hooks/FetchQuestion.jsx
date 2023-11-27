import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import data, {answers} from "../soal/soalPretest"
import dataStruk, {answerStruk} from "../soal/soalTerstruktur"
import dataBim, {answerBim} from "../soal/soalTerbimbing"
import dataMan, {answerMan} from "../soal/soalMandiri"
import dataStruk2, {answerStruk2} from "../soal/soalTerstruktur2"
import dataBim2, {answerBim2} from "../soal/soalTerbimbing2"
import dataMan2, {answerMan2} from "../soal/soalMandiri2"

import * as Action from '../redux/question_reducer'
import * as Actions from '../redux/questionstruk_reducer'
import * as Actionb from '../redux/questionbim_reducer'
import * as Actionm from '../redux/questionman_reducer'
import * as Actions2 from '../redux/questionstruk2_reducer'
import * as Actionb2 from '../redux/questionbim2_reducer'
import * as Actionm2 from '../redux/questionman2_reducer'

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
                    console.log("mquestion", question);
                    console.log("answerStruk", answerStruk);
                    console.log("p", dispatch(Actions.startExamActionStruk({ question, answerStruk })));
                    /** dispatch an action */
                    dispatch(Actions.startExamActionStruk({ question, answerStruk }))

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


/** Terbimbing */
export const useFetchQestionBim = () => {
    const dispatch = useDispatch();   
    const [getDataBim, setGetDataBim] = useState({ isLoading : false, apiData : [], serverError: null});

    useEffect(() => {
        setGetDataBim(prev => ({...prev, isLoading : true}));

        (async () => {
            try {
                let question = await dataBim;
                // const [{ questions, answers }] = await getServerData(`http://localhost:5000/api/questions`, (data) => data)
                
                if(question.length > 0){
                    setGetDataBim(prev => ({...prev, isLoading : false}));
                    setGetDataBim(prev => ({...prev, apiData : question}));
                    console.log("mquestion", question);
                    console.log("answerStruk", answerBim);
                    console.log("p", dispatch(Actions.startExamActionStruk({ question, answerBim })));
                    /** dispatch an action */
                    dispatch(Actionb.startExamActionBim({ question, answerBim }))

                } else{
                    throw new Error("No Question Avalibale");
                }
            } catch (error) {
                setGetDataBim(prev => ({...prev, isLoading : false}));
                setGetDataBim(prev => ({...prev, serverError : error}));
            }
        })();
    }, [dispatch]);

    return [getDataBim, setGetDataBim];
}
/** ====== */


/** Mandiri */
export const useFetchQestionMan = () => {
    const dispatch = useDispatch();   
    const [getDataMan, setGetDataMan] = useState({ isLoading : false, apiData : [], serverError: null});

    useEffect(() => {
        setGetDataMan(prev => ({...prev, isLoading : true}));

        (async () => {
            try {
                let question = await dataMan;
                // const [{ questions, answers }] = await getServerData(`http://localhost:5000/api/questions`, (data) => data)
                
                if(question.length > 0){
                    setGetDataMan(prev => ({...prev, isLoading : false}));
                    setGetDataMan(prev => ({...prev, apiData : question}));
                    console.log("mquestion", question);
                    console.log("answerStruk", answerMan);
                    console.log("p", dispatch(Actionm.startExamActionMan({ question, answerMan })));
                    /** dispatch an action */
                    dispatch(Actionm.startExamActionMan({ question, answerMan }))

                } else{
                    throw new Error("No Question Avalibale");
                }
            } catch (error) {
                setGetDataMan(prev => ({...prev, isLoading : false}));
                setGetDataMan(prev => ({...prev, serverError : error}));
            }
        })();
    }, [dispatch]);

    return [getDataMan, setGetDataMan];
}
/** ======= */


/** Terstruktur 2 */
export const useFetchQestionStruk2 = () => {
    const dispatch = useDispatch();   
    const [getDataStruk2, setGetDataStruk2] = useState({ isLoading : false, apiData : [], serverError: null});

    useEffect(() => {
        setGetDataStruk2(prev => ({...prev, isLoading : true}));

        (async () => {
            try {
                let question = await dataStruk2;
                // const [{ questions, answers }] = await getServerData(`http://localhost:5000/api/questions`, (data) => data)
                
                if(question.length > 0){
                    setGetDataStruk2(prev => ({...prev, isLoading : false}));
                    setGetDataStruk2(prev => ({...prev, apiData : question}));
                    console.log("mquestion", question);
                    console.log("answerStruk", answerStruk2);
                    console.log("p", dispatch(Actions2.startExamActionStruk2({ question, answerStruk2 })));
                    /** dispatch an action */
                    dispatch(Actions2.startExamActionStruk2({ question, answerStruk2 }))

                } else{
                    throw new Error("No Question Avalibale");
                }
            } catch (error) {
                setGetDataStruk2(prev => ({...prev, isLoading : false}));
                setGetDataStruk2(prev => ({...prev, serverError : error}));
            }
        })();
    }, [dispatch]);

    return [getDataStruk2, setGetDataStruk2];
}
/** ============= */

/** Terbimbing 2 */
export const useFetchQestionBim2 = () => {
    const dispatch = useDispatch();   
    const [getDataBim2, setGetDataBim2] = useState({ isLoading : false, apiData : [], serverError: null});

    useEffect(() => {
        setGetDataBim2(prev => ({...prev, isLoading : true}));

        (async () => {
            try {
                let question = await dataBim2;
                // const [{ questions, answers }] = await getServerData(`http://localhost:5000/api/questions`, (data) => data)
                
                if(question.length > 0){
                    setGetDataBim2(prev => ({...prev, isLoading : false}));
                    setGetDataBim2(prev => ({...prev, apiData : question}));
                    console.log("mquestion", question);
                    console.log("answerStruk", answerBim2);
                    console.log("p", dispatch(Actionb2.startExamActionBim2({ question, answerBim2 })));
                    /** dispatch an action */
                    dispatch(Actionb2.startExamActionBim2({ question, answerBim2 }))

                } else{
                    throw new Error("No Question Avalibale");
                }
            } catch (error) {
                setGetDataBim2(prev => ({...prev, isLoading : false}));
                setGetDataBim2(prev => ({...prev, serverError : error}));
            }
        })();
    }, [dispatch]);

    return [getDataBim2, setGetDataBim2];
}
/** ============ */

/** Mandiri 2 */
export const useFetchQestionMan2 = () => {
    const dispatch = useDispatch();   
    const [getDataMan2, setGetDataMan2] = useState({ isLoading : false, apiData : [], serverError: null});

    useEffect(() => {
        setGetDataMan2(prev => ({...prev, isLoading : true}));

        (async () => {
            try {
                let question = await dataMan2;
                // const [{ questions, answers }] = await getServerData(`http://localhost:5000/api/questions`, (data) => data)
                
                if(question.length > 0){
                    setGetDataMan2(prev => ({...prev, isLoading : false}));
                    setGetDataMan2(prev => ({...prev, apiData : question}));
                    console.log("mquestion", question);
                    console.log("answerStruk", answerMan2);
                    console.log("p", dispatch(Actionm2.startExamActionMan2({ question, answerMan2 })));
                    /** dispatch an action */
                    dispatch(Actionm2.startExamActionMan2({ question, answerMan2 }))

                } else{
                    throw new Error("No Question Avalibale");
                }
            } catch (error) {
                setGetDataMan2(prev => ({...prev, isLoading : false}));
                setGetDataMan2(prev => ({...prev, serverError : error}));
            }
        })();
    }, [dispatch]);

    return [getDataMan2, setGetDataMan2];
}
/** ========= */


/** Pretest */
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
/** */


/** Terstruktur */
export const MoveNextQuestionStruk = () => async (dispatch) => {
    try {
        dispatch(Actions.moveNextActionStruk());
    } catch (error) {
        console.log(error)
    }
}

export const MovePrevQuestionStruk = () => async (dispatch) => {
    try {
        dispatch(Actions.movePrevActionStruk());
    } catch (error) {
        console.log(error)
    }
}
/** */

/** Terbimbing */
export const MoveNextQuestionBim = () => async (dispatch) => {
    try {
        dispatch(Actionb.moveNextActionBim());
    } catch (error) {
        console.log(error)
    }
}

export const MovePrevQuestionBim = () => async (dispatch) => {
    try {
        dispatch(Actionb.movePrevActionBim());
    } catch (error) {
        console.log(error)
    }
}

/** */


/** Mandiri */
export const MoveNextQuestionMan = () => async (dispatch) => {
    try {
        dispatch(Actionm.moveNextActionMan());
    } catch (error) {
        console.log(error)
    }
}

export const MovePrevQuestionMan = () => async (dispatch) => {
    try {
        dispatch(Actionm.movePrevActionMan());
    } catch (error) {
        console.log(error)
    }
}
/** ======= */


/** Terstruktur 2 */
export const MoveNextQuestionStruk2 = () => async (dispatch) => {
    try {
        dispatch(Actions2.moveNextActionStruk2());
    } catch (error) {
        console.log(error)
    }
}

export const MovePrevQuestionStruk2 = () => async (dispatch) => {
    try {
        dispatch(Actions2.movePrevActionStruk2());
    } catch (error) {
        console.log(error)
    }
}
/** ============= */

/** Terbimbing 2 */
export const MoveNextQuestionBim2 = () => async (dispatch) => {
    try {
        dispatch(Actionb2.moveNextActionBim2());
    } catch (error) {
        console.log(error)
    }
}

export const MovePrevQuestionBim2 = () => async (dispatch) => {
    try {
        dispatch(Actionb2.movePrevActionBim2());
    } catch (error) {
        console.log(error)
    }
}
/** ============ */

/** Mandiri 2 */
export const MoveNextQuestionMan2 = () => async (dispatch) => {
    try {
        dispatch(Actionm2.moveNextActionMan2());
    } catch (error) {
        console.log(error)
    }
}

export const MovePrevQuestionMan2 = () => async (dispatch) => {
    try {
        dispatch(Actionm2.movePrevActionMan2());
    } catch (error) {
        console.log(error)
    }
}
/** ========= */



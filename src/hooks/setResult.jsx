import { 
    postServerData, 
    postServerDataStruk, 
    postServerDataBim, 
    postServerDataMan,
    postServerDataStruk2, 
    postServerDataBim2,
    postServerDataMan2} from '../helper/helper'
import * as Action from '../redux/result_reducer'
import * as Actions from '../redux/resultstruk_reducer'
import * as Actionb from '../redux/resultbim_reducer'
import * as Actionm from '../redux/resultman_reducer'
import * as Actions2 from '../redux/resultstruk2_reducer'
import * as Actionb2 from '../redux/resultbim2_reducer'
import * as Actionm2 from '../redux/resultman2_reducer'

export const PushAnswer = (result) => async (dispatch) => {
    try {
        await dispatch(Action.pushResultAction(result))
    } catch (error) {
        console.log(error)
    }
}

export const updateResult = (index) => async (dispatch) => {
    try {
        dispatch(Action.updateResultAction(index));
    } catch (error) {
        console.log(error)
    }
}

/** insert user data */
// export const usePublishResult = (resultData) => {
//     const { result, username } = resultData;
//     (async () => {
//         try {
//             if(result !== [] && !username) throw new Error("Couldn't get Result");
//             await postServerData(`http://localhost:5000/api/result`, resultData, data => data)
//         } catch (error) {
//             console.log(error)
//         }
//     })();
// }

export const usePublishResult = (resultData) => {
    console.log(resultData)
    if (resultData) {
        const { result, username } = resultData;
        (async () => {
            try {
                if (result !== [] && !username) {
                    throw new Error("Couldn't get Result");
                }
                await postServerData(`http://localhost:5000/api/result`, resultData, (data) => data);
                console.log('successfully post data')
            } catch (error) {
                console.log(error);
            }
        })();
    } else {
        console.log("resultData is undefined");
    }
}


/** Terstruktur */
export const PushAnswerStruk = (result) => async (dispatch) => {
    try {
        await dispatch(Actions.pushResultActionStruk(result))
    } catch (error) {
        console.log(error)
    }
}

export const updateResultStruk = (index) => async (dispatch) => {
    try {
        dispatch(Actions.updateResultActionStruk(index));
    } catch (error) {
        console.log(error)
    }
}

export const usePublishResultStruk = (resultData) => {
    console.log(resultData)
    if (resultData) {
        const { result, username } = resultData;
        (async () => {
            try {
                if (result !== [] && !username) {
                    throw new Error("Couldn't get Result");
                }
                await postServerDataStruk(`http://localhost:5000/api/resultstruk`, resultData, (data) => data);
                console.log('successfully post data')
            } catch (error) {
                console.log(error);
            }
        })();
    } else {
        console.log("resultData is undefined");
    }
}
/** ========= */


/** Terbimbing */
export const PushAnswerBim = (result) => async (dispatch) => {
    try {
        await dispatch(Actionb.pushResultActionBim(result))
    } catch (error) {
        console.log(error)
    }
}

export const updateResultBim = (index) => async (dispatch) => {
    try {
        dispatch(Actionb.updateResultActionBim(index));
    } catch (error) {
        console.log(error)
    }
}

export const usePublishResultBim = (resultData) => {
    console.log(resultData)
    if (resultData) {
        const { result, username } = resultData;
        (async () => {
            try {
                if (result !== [] && !username) {
                    throw new Error("Couldn't get Result");
                }
                await postServerDataBim(`http://localhost:5000/api/resultbim`, resultData, (data) => data);
                console.log('successfully post data')
            } catch (error) {
                console.log(error);
            }
        })();
    } else {
        console.log("resultData is undefined");
    }
}
/** ========== */


/** Mandiri */
export const PushAnswerMan = (result) => async (dispatch) => {
    try {
        await dispatch(Actionm.pushResultActionMan(result))
    } catch (error) {
        console.log(error)
    }
}

export const updateResultMan = (index) => async (dispatch) => {
    try {
        dispatch(Actionm.updateResultActionMan(index));
    } catch (error) {
        console.log(error)
    }
}

export const usePublishResultMan = (resultData) => {
    console.log(resultData)
    if (resultData) {
        const { result, username } = resultData;
        (async () => {
            try {
                if (result !== [] && !username) {
                    throw new Error("Couldn't get Result");
                }
                await postServerDataMan(`http://localhost:5000/api/resultman`, resultData, (data) => data);
                console.log('successfully post data')
            } catch (error) {
                console.log(error);
            }
        })();
    } else {
        console.log("resultData is undefined");
    }
}
/** ======= */


/** Terstruktur 2 */
export const PushAnswerStruk2 = (result) => async (dispatch) => {
    try {
        await dispatch(Actions2.pushResultActionStruk2(result))
    } catch (error) {
        console.log(error)
    }
}

export const updateResultStruk2 = (index) => async (dispatch) => {
    try {
        dispatch(Actions2.updateResultActionStruk2(index));
    } catch (error) {
        console.log(error)
    }
}

export const usePublishResultStruk2 = (resultData) => {
    console.log(resultData)
    if (resultData) {
        const { result, username } = resultData;
        (async () => {
            try {
                if (result !== [] && !username) {
                    throw new Error("Couldn't get Result");
                }
                await postServerDataStruk2(`http://localhost:5000/api/resultstruk2`, resultData, (data) => data);
                console.log('successfully post data')
            } catch (error) {
                console.log(error);
            }
        })();
    } else {
        console.log("resultData is undefined");
    }
}
/** ============= */

/** Terbimbing 2 */
export const PushAnswerBim2 = (result) => async (dispatch) => {
    try {
        await dispatch(Actionb2.pushResultActionBim2(result))
    } catch (error) {
        console.log(error)
    }
}

export const updateResultBim2 = (index) => async (dispatch) => {
    try {
        dispatch(Actionb2.updateResultActionBim2(index));
    } catch (error) {
        console.log(error)
    }
}

export const usePublishResultBim2 = (resultData) => {
    console.log(resultData)
    if (resultData) {
        const { result, username } = resultData;
        (async () => {
            try {
                if (result !== [] && !username) {
                    throw new Error("Couldn't get Result");
                }
                await postServerDataBim2(`http://localhost:5000/api/resultbim2`, resultData, (data) => data);
                console.log('successfully post data')
            } catch (error) {
                console.log(error);
            }
        })();
    } else {
        console.log("resultData is undefined");
    }
}
/** ============ */

/** Mandiri 2 */
export const PushAnswerMan2 = (result) => async (dispatch) => {
    try {
        await dispatch(Actionm2.pushResultActionMan2(result))
    } catch (error) {
        console.log(error)
    }
}

export const updateResultMan2 = (index) => async (dispatch) => {
    try {
        dispatch(Actionm2.updateResultActionMan2(index));
    } catch (error) {
        console.log(error)
    }
}

export const usePublishResultMan2 = (resultData) => {
    console.log(resultData)
    if (resultData) {
        const { result, username } = resultData;
        (async () => {
            try {
                if (result !== [] && !username) {
                    throw new Error("Couldn't get Result");
                }
                await postServerDataMan2(`http://localhost:5000/api/resultman2`, resultData, (data) => data);
                console.log('successfully post data')
            } catch (error) {
                console.log(error);
            }
        })();
    } else {
        console.log("resultData is undefined");
    }
}
/** ========= */
import { postServerData } from '../helper/helper'
import * as Action from '../redux/result_reducer'

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

export const usePublishResultStruk = (resultData) => {
    console.log(resultData)
    if (resultData) {
        const { result, username } = resultData;
        (async () => {
            try {
                if (result !== [] && !username) {
                    throw new Error("Couldn't get Result");
                }
                await postServerData(`http://localhost:5000/api/resultstruk`, resultData, (data) => data);
                console.log('successfully post data')
            } catch (error) {
                console.log(error);
            }
        })();
    } else {
        console.log("resultData is undefined");
    }
}
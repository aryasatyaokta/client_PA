import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from 'axios'

export function attempts_Number(result){
    return result.filter(r => r !== undefined).length;
}

export function earnPoints_Number(result, answers, point) {
    if (!result || !answers || result.length !== answers.length) {
      return 0; 
    }
  
    return result
      .map((element, i) => (answers[i] === element ? point : 0))
      .reduce((prev, curr) => prev + curr, 0);
  }

export function flagResult(totalPoints, earnPoints){
    return (totalPoints * 60 / 100) < earnPoints; 
}

/** check user auth  */
export function CheckUserExist({ children }){
    const auth = useSelector(state => state.result.userId)
    return auth ? children : <Navigate to={'/pretest'} replace={true}></Navigate>
}

/** get server data */
// export async function getServerData(url, callback){
//     const data = await (await axios.get(url))?.data;
//     return callback ? callback(data) : data;
// }

export async function postServerData(url, resultsStruk, callback){
    const data = await (await axios.post(url, resultsStruk))?.data;
    return callback ? callback(data) : data;
}

/** Terstruktur */
export function attempts_NumberStruk(resultsStruk){
    return resultsStruk.filter(r => r !== undefined).length;
}

export function earnPoints_NumberStruk(resultsStruk, answerStruk, point) {
    if (!resultsStruk || !answerStruk || resultsStruk.length !== answerStruk.length) {
      return 0; 
    }
  
    return resultsStruk
      .map((element, i) => (answerStruk[i] === element ? point : 0))
      .reduce((prev, curr) => prev + curr, 0);
  }

export function flagResultStruk(totalPoints, earnPoints){
    return (totalPoints * 60 / 100) < earnPoints; 
}

/** check user auth  */
export function CheckUserExistStruk({ children }){
    const auth = useSelector(state => state.resultStruk.userIdStruk)
    return auth ? children : <Navigate to={'/posttest1'} replace={true}></Navigate>
}

/** get server data */
// export async function getServerData(url, callback){
//     const data = await (await axios.get(url))?.data;
//     return callback ? callback(data) : data;
// }
export async function postServerDataStruk(url, result, callback){
    const data = await (await axios.post(url, result))?.data;
    return callback ? callback(data) : data;
}

/** Terbimbing */

export function attempts_NumberBim(resultBim){
    return resultBim.filter(r => r !== undefined).length;
}

export function earnPoints_NumberBim(resultBim, answerBim, point) {
    if (!resultBim || !answerBim || resultBim.length !== answerBim.length) {
      return 0; 
    }
  
    return resultBim
      .map((element, i) => (answerBim[i] === element ? point : 0))
      .reduce((prev, curr) => prev + curr, 0);
  }

export function flagResultBim(totalPoints, earnPoints){
    return (totalPoints * 60 / 100) < earnPoints; 
}

/** check user auth  */
export function CheckUserExistBim({ children }){
    const auth = useSelector(state => state.resultBim.userIdBim)
    return auth ? children : <Navigate to={'/posttest2'} replace={true}></Navigate>
}

/** get server data */
// export async function getServerData(url, callback){
//     const data = await (await axios.get(url))?.data;
//     return callback ? callback(data) : data;
// }
export async function postServerDataBim(url, result, callback){
    const data = await (await axios.post(url, result))?.data;
    return callback ? callback(data) : data;
}

/** =========== */


/** Mandiri */
export function attempts_NumberMan(resultMan){
    return resultMan.filter(r => r !== undefined).length;
}

export function earnPoints_NumberMan(resultMan, answerMan, point) {
    if (!resultMan || !answerMan || resultMan.length !== answerMan.length) {
      return 0; 
    }
  
    return resultMan
      .map((element, i) => (answerMan[i] === element ? point : 0))
      .reduce((prev, curr) => prev + curr, 0);
  }

export function flagResultMan(totalPoints, earnPoints){
    return (totalPoints * 60 / 100) < earnPoints; 
}

/** check user auth  */
export function CheckUserExistMan({ children }){
    const auth = useSelector(state => state.resultMan.userIdMan)
    return auth ? children : <Navigate to={'/posttest3'} replace={true}></Navigate>
}

/** get server data */
// export async function getServerData(url, callback){
//     const data = await (await axios.get(url))?.data;
//     return callback ? callback(data) : data;
// }
export async function postServerDataMan(url, result, callback){
    const data = await (await axios.post(url, result))?.data;
    return callback ? callback(data) : data;
}
/** ======= */


/** Terstruktur 2 */
export function attempts_NumberStruk2(resultStruk2){
    return resultStruk2.filter(r => r !== undefined).length;
}

export function earnPoints_NumberStruk2(resultStruk2, answerStruk2, point) {
    if (!resultStruk2 || !answerStruk2 || resultStruk2.length !== answerStruk2.length) {
      return 0; 
    }
  
    return resultStruk2
      .map((element, i) => (answerStruk2[i] === element ? point : 0))
      .reduce((prev, curr) => prev + curr, 0);
  }

export function flagResultStruk2(totalPoints, earnPoints){
    return (totalPoints * 60 / 100) < earnPoints; 
}

/** check user auth  */
export function CheckUserExistStruk2({ children }){
    const auth = useSelector(state => state.resultStruk2.userIdStruk2)
    return auth ? children : <Navigate to={'/posttests1'} replace={true}></Navigate>
}

/** get server data */
// export async function getServerData(url, callback){
//     const data = await (await axios.get(url))?.data;
//     return callback ? callback(data) : data;
// }
export async function postServerDataStruk2(url, result, callback){
    const data = await (await axios.post(url, result))?.data;
    return callback ? callback(data) : data;
}
/** ============= */

/** Terbimbing 2 */
export function attempts_NumberBim2(resultBim2){
    return resultBim2.filter(r => r !== undefined).length;
}

export function earnPoints_NumberBim2(resultBim2, answerBim2, point) {
    if (!resultBim2 || !answerBim2 || resultBim2.length !== answerBim2.length) {
      return 0; 
    }
  
    return resultBim2
      .map((element, i) => (answerBim2[i] === element ? point : 0))
      .reduce((prev, curr) => prev + curr, 0);
  }

export function flagResultBim2(totalPoints, earnPoints){
    return (totalPoints * 60 / 100) < earnPoints; 
}

/** check user auth  */
export function CheckUserExistBim2({ children }){
    const auth = useSelector(state => state.resultBim2.userIdBim2)
    return auth ? children : <Navigate to={'/posttests2'} replace={true}></Navigate>
}

/** get server data */
// export async function getServerData(url, callback){
//     const data = await (await axios.get(url))?.data;
//     return callback ? callback(data) : data;
// }
export async function postServerDataBim2(url, result, callback){
    const data = await (await axios.post(url, result))?.data;
    return callback ? callback(data) : data;
}
/** ============ */

/** Mandiri 2 */
export function attempts_NumberMan2(resultMan2){
    return resultMan2.filter(r => r !== undefined).length;
}

export function earnPoints_NumberMan2(resultMan2, answerMan2, point) {
    if (!resultMan2 || !answerMan2 || resultMan2.length !== answerMan2.length) {
      return 0; 
    }
  
    return resultMan2
      .map((element, i) => (answerMan2[i] === element ? point : 0))
      .reduce((prev, curr) => prev + curr, 0);
  }

export function flagResultMan2(totalPoints, earnPoints){
    return (totalPoints * 60 / 100) < earnPoints; 
}

/** check user auth  */
export function CheckUserExistMan2({ children }){
    const auth = useSelector(state => state.resultMan2.userIdMan2)
    return auth ? children : <Navigate to={'/posttests3'} replace={true}></Navigate>
}

/** get server data */
// export async function getServerData(url, callback){
//     const data = await (await axios.get(url))?.data;
//     return callback ? callback(data) : data;
// }
export async function postServerDataMan2(url, result, callback){
    const data = await (await axios.post(url, result))?.data;
    return callback ? callback(data) : data;
}
/** ========= */
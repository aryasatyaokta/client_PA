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
    return auth ? children : <Navigate to={'/hasil-pretest'} replace={true}></Navigate>
}

/** get server data */
// export async function getServerData(url, callback){
//     const data = await (await axios.get(url))?.data;
//     return callback ? callback(data) : data;
// }

export async function postServerData(url, result, callback){
    const data = await (await axios.post(url, result))?.data;
    return callback ? callback(data) : data;
}

/** Terstruktur */
export function attempts_NumberStruk(result){
    return result.filter(r => r !== undefined).length;
}

export function earnPoints_NumberStruk(result, answers, point) {
    if (!result || !answers || result.length !== answers.length) {
      return 0; 
    }
  
    return result
      .map((element, i) => (answers[i] === element ? point : 0))
      .reduce((prev, curr) => prev + curr, 0);
  }

export function flagResultStruk(totalPoints, earnPoints){
    return (totalPoints * 60 / 100) < earnPoints; 
}

/** check user auth  */
export function CheckUserExistStruk({ children }){
    const auth = useSelector(state => state.result.userId)
    return auth ? children : <Navigate to={'/hasil-pretest'} replace={true}></Navigate>
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


/** =========== */
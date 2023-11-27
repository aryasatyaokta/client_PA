import { combineReducers, configureStore } from '@reduxjs/toolkit';

/** call reducers */
import questionReducer from './question_reducer';
import resultReducer from './result_reducer';
import questionstruk_reducer from './questionstruk_reducer';
import resultstruk_reducer from './resultstruk_reducer';
import questionbim_reducer from './questionbim_reducer';
import resultbim_reducer from './resultbim_reducer';
import questionman_reducer from './questionman_reducer';
import resultman_reducer from './resultman_reducer';
import questionstruk2_reducer from './questionstruk2_reducer';
import resultstruk2_reducer from './resultstruk2_reducer';
import questionbim2_reducer from './questionbim2_reducer';
import resultbim2_reducer from './resultbim2_reducer';
import questionman2_reducer from './questionman2_reducer';
import resultman2_reducer from './resultman2_reducer';

const rootReducer = combineReducers({
    questions : questionReducer,
    result : resultReducer,
    questionStruk: questionstruk_reducer,
    resultStruk: resultstruk_reducer,
    questionBim: questionbim_reducer,
    resultBim: resultbim_reducer,
    questionMan: questionman_reducer,
    resultMan: resultman_reducer,
    questionStruk2: questionstruk2_reducer,
    resultStruk2: resultstruk2_reducer,
    questionBim2: questionbim2_reducer,
    resultBim2: resultbim2_reducer,
    questionMan2: questionman2_reducer,
    resultMan2: resultman2_reducer
})

/** create store with reducer */
export default configureStore({ reducer : rootReducer});
import { combineReducers } from 'redux';
import { memberReducer } from './memberReducer';
import { landingReducer } from './landingReducer';
import { adminReducer } from './adminReducer';


export const rootReducer = combineReducers({
    memberReducer,
    landingReducer,
    adminReducer
});

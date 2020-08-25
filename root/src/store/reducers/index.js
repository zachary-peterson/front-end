import { combineReducers } from 'redux';
import { memberReducer } from './memberReducer';
import { landingReducer } from './landingReducer';

export const rootReducer = combineReducers({
    memberReducer,
    landingReducer
});

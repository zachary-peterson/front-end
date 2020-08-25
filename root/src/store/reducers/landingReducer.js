import { TOGGLE_LANDING } from '../actions';

const initialState = {
    isSignUp: false
}

export const landingReducer = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_LANDING:
            return {
                ...state,
                isSignUp: !state.isSignUp
            }
        default:
            return state
    }
}
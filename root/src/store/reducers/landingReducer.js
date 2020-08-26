import { TOGGLE_LANDING, SET_ADMIN, SET_STUDENT, SET_VOLUNTEER } from '../actions';

const initialState = {
    isSignUp: false,
    admin: false,
    student: false,
    volunteer: false
}

export const landingReducer = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_LANDING:
            return {
                ...state,
                isSignUp: !state.isSignUp
            };
        case SET_ADMIN:
            return {
                ...state,
                admin: true
            };
        case SET_STUDENT:
            return {
                ...state,
                student: true
            };
        case SET_VOLUNTEER:
            return {
                ...state,
                volunteer: true
            };
        default:
            return state
    };
};
import { TOGGLE_LANDING, SET_ADMIN, SET_STUDENT, SET_VOLUNTEER } from '../actions';

const initialState = {
    isSignUp: false,
    member: {
        admin: false,
        student: false,
        volunteer: false
    },
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
                member: {
                    ...state,
                    admin: true
                }
            };
        case SET_STUDENT:
            return {
                ...state,
                member: {
                    ...state,
                    student: true
                }
            };
        case SET_VOLUNTEER:
            return {
                ...state,
                member: {
                    ...state,
                    volunteer: true
                }
            };
        default:
            return state
    };
};
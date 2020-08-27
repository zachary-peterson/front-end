import { TOGGLE_LANDING, SET_ADMIN, SET_STUDENT, SET_VOLUNTEER, SET_MEMBER_ID, CLEAR_STATE } from '../actions';

const initialState = {
    isSignUp: false,
    admin: false,
    student: false,
    volunteer: false,
    memberID: ''
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
                admin: true,
                student: false,
                volunteer: false
            };
        case SET_STUDENT:
            return {
                admin: false,
                student: true,
                volunteer: false
            };
        case SET_VOLUNTEER:
            return {
                admin: false,
                student: false,
                volunteer: true
            };
        case SET_MEMBER_ID:
            return {
                ...state,
                memberID: action.payload
            }
        case CLEAR_STATE:
            return {
                state: null
            }
        default:
            return state
    };
};
import { FETCH_VOLUNTEERS, FETCH_VOLUNTEERS_RES, FETCH_VOLUNTEERS_ERR } from '../actions';

const initialState = {
    volunteers: [],
    loadingState: false,
    error: ''
}

export const studentReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_VOLUNTEERS:
            return {
                ...state,
                loadingState: true,
                error: ''
            };
        case FETCH_VOLUNTEERS_RES:
            return {
                ...state,
                volunteers: action.payload,
                loadingState: false
            };
        case FETCH_VOLUNTEERS_ERR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}
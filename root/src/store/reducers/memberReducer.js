import { FETCH_TASKS, FETCH_TASKS_RES, FETCH_TASKS_ERR, SET_ADMIN } from '../actions';

const initialState = {
    isLoading: false,
    error: '',
    tasks: []
};

export const memberReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_TASKS:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case FETCH_TASKS_RES:
            return {
                ...state,
                tasks: action.payload,
                isLoading: false,
                error: ''
            };
        case FETCH_TASKS_ERR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    };
};
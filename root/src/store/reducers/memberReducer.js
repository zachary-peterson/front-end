import { FETCH_TASKS, FETCH_TASKS_RES, FETCH_TASKS_ERR, FETCH_VOLUNTEERS, FETCH_VOLUNTEERS_RES, FETCH_VOLUNTEERS_ERR, CLEAR_STORAGE, SET_EDITING } from '../actions';
import storage from 'redux-persist/lib/storage';

const initialState = {
    isLoading: false,
    error: '',
    tasks: [],
    volunteers: [],
    isEditing: false
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
        case SET_EDITING:
            return {
                ...state,
                isEditing: !state.isEditing
            }
        case CLEAR_STORAGE:
            storage.removeItem('persist:root');
        default:
            return state;
    };
};
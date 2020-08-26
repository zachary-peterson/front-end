export { 
    FETCH_TASKS,
    FETCH_TASKS_RES,
    FETCH_TASKS_ERR,
    fetchTasks } from './signInActions'

    export const TOGGLE_LANDING = 'TOGGLE_LANDING';
    export const SET_ADMIN = 'SET_ADMIN';
    export const SET_STUDENT = 'SET_STUDENT';
    export const SET_VOLUNTEER = 'SET_VOLUNTEER';

    export const toggleLanding = () => (dispatch) => {
        dispatch({ type: TOGGLE_LANDING })
    }

    export const setAdmin = () => (dispatch) => {
        dispatch({ type: SET_ADMIN })
    }
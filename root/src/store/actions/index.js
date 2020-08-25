export { 
    FETCH_TASKS,
    FETCH_TASKS_RES,
    FETCH_TASKS_ERR,
    fetchTasks } from './signInActions'

    export const TOGGLE_LANDING = 'TOGGLE_LANDING';

    export const toggleLanding = () => (dispatch) => {
        dispatch({ type: TOGGLE_LANDING })
    }
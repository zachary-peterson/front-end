export const FETCH_TASKS = 'FETCH_TASKS';
export const FETCH_TASKS_RES = 'FETCH_TASKS_RES';
export const FETCH_TASKS_ERR = 'FETCH_TASKS_ERR';

export const fetchTasks = () => (dispatch) => {
    dispatch({ type: FETCH_TASKS });
    
}
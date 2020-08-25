import { axiosWithAuth } from '../index';

export const FETCH_TASKS = 'FETCH_TASKS';
export const FETCH_TASKS_RES = 'FETCH_TASKS_RES';
export const FETCH_TASKS_ERR = 'FETCH_TASKS_ERR';

export const fetchTasks = () => (dispatch) => {
    dispatch({ type: FETCH_TASKS });

    // debugger

    axiosWithAuth().get('api/tasks')
    .then(res => {
        // console.log(res); -- Tasks come back as res.data
        dispatch({ type: FETCH_TASKS_RES, payload: res.data })
    })
    .catch(err => {
        console.dir(err);
        dispatch({ type: FETCH_TASKS_ERR, payload: err.data })
    })
}
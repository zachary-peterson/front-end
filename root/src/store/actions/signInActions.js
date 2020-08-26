import { axiosWithAuth } from '../index';
import { useParams } from 'react-router-dom';

export const FETCH_TASKS = 'FETCH_TASKS';
export const FETCH_TASKS_RES = 'FETCH_TASKS_RES';
export const FETCH_TASKS_ERR = 'FETCH_TASKS_ERR';
export const ADD_TASK = 'ADD_TASK'

export const fetchTasks = () => (dispatch) => {
    dispatch({ type: FETCH_TASKS });

    // debugger

    axiosWithAuth().get('api/tasks')
    .then(res => {
        // console.log(res); -- Tasks come back as res.data
        dispatch({ type: FETCH_TASKS_RES, payload: res.data })
    })
    .catch(err => {
        // console.dir(err);
        dispatch({ type: FETCH_TASKS_ERR, payload: err.data })
    })
}

export const addTask = () => (dispatch) => {
    axiosWithAuth().post('api/tasks', /* NEED TO PASS IN */ )
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.dir(err);
    })
}

export const editTask = () => (dispatch) => {
    const { id } = useParams();
    axiosWithAuth().put(`api/tasks/${id}`, /* NEED TO PASS IN */)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.dir(err);
    })
}

export const deleteTask = () => (dispatch) => {
    const { id } = useParams();

    axiosWithAuth().delete(`api/tasks/${id}`)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.dir(err);
    })
}
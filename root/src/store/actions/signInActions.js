import { axiosWithAuth } from '../index';
import { useParams, useHistory } from 'react-router-dom';

export const FETCH_TASKS = 'FETCH_TASKS';
export const FETCH_TASKS_RES = 'FETCH_TASKS_RES';
export const FETCH_TASKS_ERR = 'FETCH_TASKS_ERR';
export const ADD_TASK = 'ADD_TASK';
export const ADD_RES = 'ADD_RES'
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';

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

export const addTask = (copy) => (dispatch) => {
    dispatch({ type: FETCH_TASKS });

    axiosWithAuth().post('api/tasks', copy )
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.dir(err);
    })
}

export const editTask = (copy) => (dispatch) => {
    axiosWithAuth().put(`api/tasks/${copy.id}`, copy)
    .then(res => {
        console.log(res);
        dispatch(fetchTasks())
    })
    .catch(err => {
        console.dir(err);
    })
}

export const deleteTask = (copy) => (dispatch) => {

    axiosWithAuth().delete(`api/tasks/${copy.id}`)
    .then(res => {
        console.log(res);
        dispatch(fetchTasks())
    })
    .catch(err => {
        console.dir(err);
    })
}
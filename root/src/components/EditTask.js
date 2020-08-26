import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { axiosWithAuth, fetchTasks } from '../store';
import { editTask } from '../store/actions/signInActions';

const taskForm = {
    title: '',
    description: ''
}

export const EditTask = (task) => {
    const [taskToEdit, setTaskToEdit] = useState(taskForm);
    const dispatch = useDispatch();
    const { push } = useHistory();
    const { id } = useParams()

    useEffect(() => {
        axiosWithAuth().get(`api/tasks/${id}`)
        .then(res => {
            // console.log(res);
            setTaskToEdit(res.data)
        })
        .catch(err => {
            console.dir(err)
        })
    }, [])

    const handleChanges = e => {
        e.preventDefault();
        setTaskToEdit({ ...taskToEdit, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(editTask(taskToEdit));
        dispatch(fetchTasks())
        push('/dashboard');
    }

    return (
        <form>
            <label htmlFor='title'>Title:</label>
            <input
                type='text'
                name='title'
                value={taskToEdit.title}
                onChange={handleChanges}
            />

            <label htmlFor='description'>Description:</label>
            <input
                type='text'
                name='description'
                value={taskToEdit.description}
                onChange={handleChanges}
            />

            <button onClick={handleSubmit}>Update</button>
        </form>
    )
}

export default EditTask;
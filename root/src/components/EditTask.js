import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { axiosWithAuth, fetchTasks } from '../store';
import { editTask } from '../store/actions/signInActions';
import { NewTaskForm } from './NewTask'

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
            // console.dir(err)
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
        <NewTaskForm>
            <div className='sep'>
                <label className='left' htmlFor='title'>Title:</label>
                <input
                    className='right'
                    type='text'
                    name='title'
                    value={taskToEdit.title}
                    onChange={handleChanges}
                />
            </div>

            <div className='sep'> 
                <label className='left' htmlFor='description'>Description:</label>
                <textarea
                    className='right'
                    type='text'
                    name='description'
                    value={taskToEdit.description}
                    onChange={handleChanges}
                />
            </div>

            <button className='sub' onClick={handleSubmit}>Update</button>
        </NewTaskForm>
    )
}

export default EditTask;
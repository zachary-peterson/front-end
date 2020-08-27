import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addTask, fetchTasks } from '../store';

const taskForm = {
    title: '',
    description: ''
}

const NewTask = () => {
    const [newTask, setNewTask] = useState(taskForm);
    const dispatch = useDispatch();
    const { push } = useHistory();

    const handleChanges = e => {
        setNewTask({ ...newTask, [e.target.name]: e.target.value })
    }

    const submitTask = e => {
        e.preventDefault();
        dispatch(addTask(newTask));
        dispatch(fetchTasks())
        push('/dashboard')
    }

    console.log(newTask)

    return (
        <form>
            <label htmlFor='title'>Title:</label>
            <input
                type='text'
                name='title'
                value={newTask.title}
                onChange={handleChanges}
            />

            <label htmlFor='description'>Description:</label>
            <input
                type='text'
                name='description'
                value={newTask.description}
                onChange={handleChanges}
            />

            <button onClick={submitTask}>Add Task</button>
        </form>
    )
}

export default NewTask;
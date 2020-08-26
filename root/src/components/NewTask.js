import React, { useState } from 'react';

const taskForm = {
    title: '',
    description: ''
}

export const NewPost = () => {
    const [newTask, setNewTask] = useState(taskForm);

    const handleChanges = e => {
        setNewTask({ [e.target.name]: e.target.value })
    }

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

            <button onClick={() => /* NEED TO ADD */}>Add Task</button>
        </form>
    )
}
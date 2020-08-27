import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addTask, fetchTasks } from '../store';
import styled from 'styled-components';

export const NewTaskForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    padding: 5%;
    margin: 2% auto;
    background-color: #9da7b6;
    font-size: 2rem;
    border: 3px solid #ffffff;

    .text {
        font-size: 3rem;
        font-family: 'Russo One', sans-serif;
    }

    .sep {
        display: flex;
        width: 90%;
        margin: 1% auto;

        .left {
            display: flex;
            width: 30%;
            margin: 0 auto;
            font-family: 'Russo One', sans-serif;
            color: #ffffff;
            text-shadow: 2px 2px black;
        }

        .right {
            display: flex;
            width: 65%;
            margin: 0 auto;
            font-size: 2rem;
            font-family: 'Alata', sans-serif;
        }

    }

    .sub {
            width: 30%;
            padding: 1%;
            margin: 1% auto;
            background-color: #383838;
            font-size: 2rem;
            color: #ffffff;
            text-shadow: 2px 2px #000000;
            font-family: 'Russo One', sans-serif;

            &:hover {
                background-color: #545454;
            }
        }

`

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
        <NewTaskForm>
            <div className='sep'>
                <label className='left' htmlFor='title'>Title:</label>
                <input
                    className='right'
                    type='text'
                    name='title'
                    value={newTask.title}
                    placeholder='New task title...'
                    onChange={handleChanges}
                />
            </div>

            <div className='sep'>
                <label className='left' htmlFor='description'>Description:</label>
                <textarea
                    className='right'
                    type='text'
                    name='description'
                    value={newTask.description}
                    placeholder='Please be as descriptive as possible in your description of the task...'
                    onChange={handleChanges}
                />
            </div>

            <div>
                <button className='sub' onClick={submitTask}>Add Task</button>
                <button className='sub' onClick={() => push('/dashboard')}>Cancel</button>
            </div>
        </NewTaskForm>
    )
}

export default NewTask;
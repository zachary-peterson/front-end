import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, deleteTask, fetchAllMembers, deleteMember, toggleViewMember, toggleViewTasks } from '../store';
import { LoadingView } from './LoadingView';
import styled from 'styled-components';

const AdminDiv = styled.div`
    display: flex;
    width: 100%;
    margin: 1.5% auto;
    font-size: 2rem;
    font-family: 'Alata', sans-serif;

    .left {
        width: 20%;
        display: flex;
        flex-direction: column;
        background-color: #9da7b6;
        margin: 0 auto;
        height: 50vh;
        border: solid 2px #ffffff;

        button {
            display: flex;
            width: 50%;
            padding: 2%;
            margin: 10% auto;
            font-size: 1.5rem;
            background-color: #383838;
            text-shadow: 2px 2px #000000;
            color: #ffffff;
            font-family: 'Russo One', sans-serif;
            justify-content: center;
            align-items: center;
            text-align: center;

            &:hover {
                background-color: #545454;
            }
        }
    }

    .right {
        width: 70%;
        margin: 0 auto;
        background-color: #9da7b6;
        border: 3px solid #ffffff;
    }

    .tasks {
        width: 80%;
        margin: 1% auto;
        padding: 5% 0;
        font-size: 1.5rem;
        background-color: #e6eaf0;
        border: 3px solid #000000;

        button {
            width: 30%;
            font-size: 1.5rem;
            background-color: #383838;
            color: white;
            text-shadow: 2px 2px #000000;
            font-family: 'Russo One', sans-serif;
            justify-content: center;
            align-items: center;
            padding: 1.5% 0;

            &:hover {
                background-color: #545454;
            }
        }

        h2,h3 {
            font-size: 3rem;
            text-transform: uppercase;
        }
    }
`

export const AdminView = () => {
    const tasks = useSelector(state => state.memberReducer.tasks);
    const allMembers = useSelector(state => state.memberReducer.volunteers)
    const loading = useSelector(state => state.memberReducer.isLoading);
    const memberView = useSelector(state => state.adminReducer.memberView);
    const taskView = useSelector(state => state.adminReducer.taskView)
    const { push } = useHistory()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasks())
        dispatch(fetchAllMembers())
    }, [])

    
    return (
        <AdminDiv>
            <div className='left'>
                {
                    taskView && !loading
                    
                    ?
                    <div>
                    <button onClick={() => dispatch(toggleViewMember())}>Switch to Student View</button>
                    <button onClick={() => push('/dashboard/add-task')}><span>Add a Task</span></button>
                    </div>

                    :

                    <button onClick={() => dispatch(toggleViewTasks())} >Switch to Volunteer View</button>
                }
            </div>

            {
                loading ? <div><LoadingView /></div> : null
            }
            <div className='right'>
            {
                taskView && tasks && !loading ? tasks.map(task => {
                    return (
                        <div className='tasks' key={task.id} >
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                            <button onClick={() => push(`/dashboard/edit-task/${task.id}`)}>Edit Task</button>
                            <button onClick={() => dispatch(deleteTask(task))}>Delete Task</button>
                        </div>
                    )
                }) 
                
                : 
                
                null
            }

            {
                memberView && allMembers && !loading
                
                ? 

                allMembers.map(mem => {
                    return (
                        <div className='tasks' key={mem.id}>
                            <h2>{mem.username}</h2>
                            <h2>{mem.email}</h2>
                            <h3>{mem['first_name']}</h3>
                            <h3>{mem['last_name']}</h3>

                            <button onClick={() => dispatch(deleteMember(mem))}>Delete User</button>
                        </div>
                    )
                })

                :

                null
            }
            </div>
        </AdminDiv>
    )
}


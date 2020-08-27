import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, deleteTask, fetchVolunteers, deleteMember } from '../store';
import { LoadingView } from './LoadingView';

export const AdminView = () => {
    const tasks = useSelector(state => state.memberReducer.tasks);
    const allMembers = useSelector(state => state.memberReducer.volunteers)
    const loading = useSelector(state => state.memberReducer.isLoading);
    const { push } = useHistory()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasks())
        dispatch(fetchVolunteers())
    }, [tasks.length])

    
    return (
        <div>
            <div>
                <button onClick={() => push('/dashboard/add-task')}>Add a Task</button>
            </div>

            {
                loading ? <div><LoadingView /></div> : null
            }

            {
                tasks.length > 0 ? tasks.map(task => {
                    return (
                        <div key={task.id} >
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
                allMembers 
                
                ? 

                allMembers.map(mem => {
                    return (
                        <div key={mem.id}>
                            <h3>{mem.username}</h3>
                            <h3>{mem.email}</h3>
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
    )
}


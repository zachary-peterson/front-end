import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, deleteTask } from '../store';

const taskForm = {
    title: '',
    description: ''
};

export const AdminView = () => {
    const tasks = useSelector(state => state.memberReducer.tasks);
    const loading = useSelector(state => state.memberReducer.isLoading);
    const params = useParams();
    const { push } = useHistory()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasks())

    }, [tasks.length])
    
    return (
        <div>
            <div>
                <button onClick={() => push('/dashboard/add-task')}>Add a Task</button>
            </div>

            {
                loading ? <div>Loading</div> : null
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
        </div>
    )
}


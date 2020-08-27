import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LoadingView } from './LoadingView';
import { fetchTasks } from '../store';


export const VolunteerView = () => {
    const tasks = useSelector(state => state.memberReducer.tasks);
    const loading = useSelector(state => state.memberReducer.isLoading);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTasks())

    }, [])

    return (
        <section>
            <h2>Volunteer View</h2>

            {
                loading ? <div><LoadingView /></div> : null
            }

            {
                tasks ? tasks.map(task => {
                    return (
                        <div key={task.id} >
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                        </div>
                    )
                }) 
                
                : 
                
                null
            }
        </section>
    )
}
import React from 'react';
import { useSelector } from 'react-redux';

export const VolunteerView = () => {
    const tasks = useSelector(state => state.memberReducer.tasks);
    const loading = useSelector(state => state.memberReducer.isLoading);

    return (
        <section>
            <h2>Volunteer View</h2>

            {
                tasks.length > 0 ? tasks.map(task => {
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
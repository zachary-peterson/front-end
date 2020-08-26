import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVolunteers } from '../store'

export const StudentView = () => {
    const volunteers = useSelector(state => state.studentReducer.volunteers);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchVolunteers())
    }, [])
    
    return (
        <section>
            <h2>Student View</h2>

            {
                volunteers ? volunteers.map(vol => {
                    return (
                        <div>
                            <h3>{vol.username}</h3>
                        </div>
                    )
                }) : null
            }
        </section>
    )
}
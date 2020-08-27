import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVolunteers } from '../store';
import { LoadingView } from './LoadingView';

export const StudentView = () => {
    const volunteers = useSelector(state => state.memberReducer.volunteers);
    const loading = useSelector(state => state.memberReducer.isLoading);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchVolunteers())
    }, [])
    
    return (
        <section>
            <h2>Student View</h2>

            {
                loading ? <div><LoadingView /></div> : null
            }

            {
                volunteers.length > 0 ? volunteers.map(vol => {
                    return (
                        <div key={vol.id} >
                            <h3>{vol.username}</h3>
                        </div>
                    )
                }) : null
            }
        </section>
    )
}
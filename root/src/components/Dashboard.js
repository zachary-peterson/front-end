import React from 'react';
import { useSelector } from 'react-redux';
import { AdminView } from './AdminView';
import { StudentView } from './StudentView';
import { VolunteerView } from './VolunteerView';

export const Dashboard = () => {
    const admin = useSelector(state => state.landingReducer.admin);
    const student = useSelector(state => state.landingReducer.student);
    const volunteer = useSelector(state => state.landingReducer.volunteer);

    // console.log(admin);

    return (
        <>
            {
                admin ? <AdminView /> : null
            }

            {
                student ? <StudentView /> : null
            }

            {
                volunteer ? <VolunteerView /> : null
            }
        </>
    )
}
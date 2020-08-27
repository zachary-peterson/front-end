import React from 'react';
import { useSelector } from 'react-redux';
import Login from './Login';
import RegisterStudent from './RegisterStudent'

export const LandingPage = () => {
    const signUp = useSelector(state => state.landingReducer.isSignUp);

    console.log(signUp)

    return (
        <section>
            <h2>Welcome to eSchool in the Cloud</h2>

            {
                signUp ? <RegisterStudent /> : <Login /> 
            }

        </section>
    )
}
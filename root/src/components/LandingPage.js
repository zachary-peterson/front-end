import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLanding } from '../store';
import Login from './Login';
import RegisterStudent from './RegisterStudent'

export const LandingPage = () => {
    const signUp = useSelector(state => state.landingReducer.isSignUp);
    const dispatch = useDispatch();

    console.log(signUp)

    const landingToggle = () =>{
        dispatch(toggleLanding())
    }

    return (
        <section>
            <h2>Welcome to eSchool in the Cloud</h2>

            {
                signUp ? <RegisterStudent /> : <Login /> 
            }

        </section>
    )
}
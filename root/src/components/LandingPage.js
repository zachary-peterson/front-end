import React from 'react';
import { useSelector } from 'react-redux';
import Login from './Login';
import RegisterStudent from './RegisterStudent';
import { Footer } from './Footer'
import styled from 'styled-components';

const LandHead = styled.h2`
    font-size: 3rem;
    font-family: 'Russo One', sans-serif;
    color: #ffffff;
    text-shadow: 2px 2px #000000;
    margin: 1% auto;
`

export const LandingPage = () => {
    const signUp = useSelector(state => state.landingReducer.isSignUp);

    // console.log(signUp)

    return (
        <section>
            <LandHead>Welcome to eSchool in the Cloud</LandHead>

            {
                signUp ? <RegisterStudent /> : <Login /> 
            }

            <div><br/></div>
        </section>
    )
}
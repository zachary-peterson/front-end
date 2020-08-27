import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { clearStorage, clearState } from '../store';

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    align-content: center;
    nav{
        width: 40%;
        display: flex;
        justify-content:flex-end;
    }
    button{
        align-content:flex-end;
        margin: 0 5%;
        margin-top: 1vh;
        width: 30%;
        border: 0px;
        font-family:Arial;
        font-size: 1rem;
        font-weight: bold;
        border-radius: 10%;
        padding: 5px 0;
        min-width: 5.5rem;
    }
    button:hover {
        box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
        transform: scale(1.1);
    }
`

export const NavBar = () => {
    const { push } = useHistory();
    const admin = useSelector(state => state.landingReducer.admin);
    const student = useSelector(state => state.landingReducer.student);
    const volunteer = useSelector(state => state.landingReducer.volunteer);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.clear();
        dispatch(clearStorage());
        dispatch(clearState());
        push('/')
    }

    return (
        <Header>
                {
                    (admin || student || volunteer) 

                       ?

                    <nav>
                    <button onClick={() => push('/dashboard')}>Dashboard</button>
                    <button onClick={() => push('/profile')} >Profile</button>
                    <button onClick={handleSubmit}>Sign Out</button>
                    </nav>

                    :

                    <nav>
                    <button onClick={() => push('/')}>Home</button>
                    </nav>
                }
                
        </Header>
    )
}